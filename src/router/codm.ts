import { hitCoda, Result } from '../utils'

export default async function codm(id: string): Promise<Result> {
  if (!id || !/^\d+$/.test(id)) {
    return {
      success: false,
      message: 'User ID tidak valid'
    }
  }

  const body = `voucherPricePoint.id=270251&voucherPricePoint.price=20000.0000&voucherPricePoint.variablePrice=0&user.userId=${id}&voucherTypeName=CALL_OF_DUTY&shopLang=id_ID`

  const data = await hitCoda(body) as {
    errorCode?: string
    errorMsg?: string
    confirmationFields?: { roles?: { role: string }[] }
  }

  if (data.errorCode) {
    return {
      success: false,
      message: data.errorMsg || 'Not found'
    }
  }

  const role = data.confirmationFields?.roles?.[0]?.role
  if (!role) {
    return {
      success: false,
      message: 'Not found'
    }
  }

  return {
    success: true,
    game: 'Call Of Duty Mobile',
    id,
    name: role
  }
}
