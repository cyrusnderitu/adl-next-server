import speaker from '../../../public/speakers.json'

export default function handler(req, res) {
  res.status(200).send(JSON.stringify(speaker, null, 2))
}
