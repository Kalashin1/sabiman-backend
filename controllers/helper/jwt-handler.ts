import * as jwt from 'jsonwebtoken'
import { ObjectID } from 'mongodb'

const maxAge = 3 * 24 * 60 *60

const createToken = (id: String|ObjectID) => {
  return jwt.sign({id}, 'my secrete key', {
    expiresIn: 3 * 24* 60 * 60
  })
}

export { maxAge, createToken }