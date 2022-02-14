import axios from 'axios'

// Note: [WMAS-7]
const mbtiTestWorker = axios.create({
  baseURL: 'https://mbti-test-ca-ko-api.karrot.workers.dev',
})

export const getParticipantCount = async () => {
  const { data } = await mbtiTestWorker.get<{ count: number }>('/participants')
  return data.count
}

export const postPartipantCount = async () => {
  const data = await mbtiTestWorker.post<{ success: boolean }>('/participants')
  return data.data.success
}
