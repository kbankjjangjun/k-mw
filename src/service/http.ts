const BASE_API_URL = process.env.NEXT_PUBLIC_API_URL

export default async function request<T>(url: string): Promise<T> {
  let data
  try {
    const res = await fetch(`${BASE_API_URL}/${url}`)
    if (res.ok) {
      data = res.json()
    }
  } catch (error: any) {
    throw new Error(error)
  }
  return data
}
