// Customer reviews shown on each service page (/services/<id>), keyed by service id.
// Pulled from the Yard Boys Facebook page recommendations.

export interface ServiceReview {
  text: string;
  source: string;
}

export const serviceReviews: Record<string, ServiceReview> = {
  'christmas-lights': {
    text: "Yard boys installed my Christmas lights this year and we won't be going back. They were professional, timely, and efficient. Looks way better than us doing them ourselves! I highly recommend Yard Boys.",
    source: 'Facebook review',
  },
  'seasonal-cleanup': {
    text: 'Yard Boys did fall cleanup and trimming for me. Unfortunately, I let it go until the cold of winter before contacting them, but they came out the very next weekend on a cold January day and did a very good and thorough job. I would definitely recommend them and will use them again.',
    source: 'Facebook review',
  },
  'land-clearing': {
    text: 'The Yard Boys did a thorough job cleaning out overgrown bushes in our yard to make space for a new fence. They were very prompt in communicating with us throughout. We definitely recommend them!',
    source: 'Facebook review',
  },
  'pruning-trimming': {
    text: 'Yard boys did a great job with pruning all my bushes, tackling a forest of weeds, and putting down fresh mulch! They were patient and kind, gave a fair estimate, and finished it in a timely matter with great care. I was so happy with their work, I highly recommend them and plan to use them in the future!',
    source: 'Facebook review',
  },
  'mulch-delivery': {
    text: 'Yard boys did a great job with pruning all my bushes, tackling a forest of weeds, and putting down fresh mulch! They were patient and kind, gave a fair estimate, and finished it in a timely matter with great care. I was so happy with their work, I highly recommend them and plan to use them in the future!',
    source: 'Facebook review',
  },
};
