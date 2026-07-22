import { hitCoda, Result } from '../utils'

export default async function codmv2(id: number): Promise<Result> {
  const body = `user.userId=${id}&voucherPricePoint.id=270251&voucherPricePoint.price=20000&voucherPricePoint.variablePrice=0&voucherTypeName=CALL_OF_DUTY&shopLang=id_ID`
  const data = await hitCoda(body)
  return {
    success: true,
    game: 'Call Of Duty Mobile',
    id,
    name: data.confirmationFields.roles[0].role
  }
}
