export default function handler(request, response) {
  response.status(200).json({
    name: 'DevKonis',
    age: 32,
    isValid: true
  })
}``