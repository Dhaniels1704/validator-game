import { Result } from '../utils'

export default async function codm(id: number): Promise<Result> {
  const response = await fetch(
    `https://api-cek-id-game-ten.vercel.app/api/check-id-game?type_name=call_of_duty&userId=${id}`
  )
  const data = await response.json() as {
    status: boolean
    nickname?: string
    message: string
  }

  if (!data.status) {
    return {
      success: false,
      message: data.message
    }
  }

  return {
    success: true,
    game: 'Call Of Duty Mobile',
    id,
    name: data.nickname
  }
}
