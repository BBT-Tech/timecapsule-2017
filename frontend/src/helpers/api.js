import {post} from './network'
export function getLetter (code) {
  return post('./api/get-capsule.php', {code: code})
}
