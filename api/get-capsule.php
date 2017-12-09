<?php

require "./config.php";
header("Content-Type: application/json");

if (!isset($_POST["code"]))
	exit;
$code = $_POST["code"];

try {
    $dbh = new PDO("mysql:dbname=$db_database;host=$db_host;charset=utf8", $db_user, $db_passwd);
} catch (PDOException $e) {
    echo json_encode([
    	"error" => 1,
    	"msg"   => "网络错误"
    ]);
    exit;
}

$sth = $dbh->prepare('SELECT * FROM `timecapsule` WHERE `code` = ?');
$sth->execute([ $code ]);

if ($result = $sth->fetch()) {
	echo json_encode([
		"error"     => 0,
		"reciever"  => htmlspecialchars($result["reciever"]),
		"content"   => str_replace(" ", "&nbsp;", str_replace("\n", "<br>", $result["future"])),
        "voice"     => $result["mediaId"] == "" ? null : "$voice_url_path/$code.mp3"
	]);
} else if (file_exists($voice_path."/$code.mp3")) {
    echo json_encode([
        "error"    => 0,
        "reciever" => "",
        "content"  => "",
        "voice"    => $voice_url_path."/$code.mp3"
    ]);
} else {
	echo json_encode([
    	"error" => 404,
    	"msg"   => "找不到你的信哦",
        "d"     => $voice_url_path."/$code.mp3"
    ]);
}
