// ((判斷使用者是否為管理員))

import UserRole from '../enums/UserRole.js'
import { StatusCodes } from 'http-status-codes'

// ((如果不是管理員就回覆沒有權限 else如果是就下一步))
export default (req, res, next) => {
  if (req.user.role !== UserRole.ADMIN) {
    res.status(StatusCodes.FORBIDDEN).json({
      success: false,
      message: '沒有權限'
    })
  } else {
    next()
  }
}
