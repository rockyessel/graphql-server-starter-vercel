import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

export default async function comment(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    try {
      await client.create({
        _type: 'useremail',
        email,
      });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }

    res.status(200).json({ msg: 'Email created' });
  }
}
