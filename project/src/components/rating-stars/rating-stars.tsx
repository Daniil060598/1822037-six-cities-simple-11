type RatingStarsProps = {
  rating: number;
  className?: string;
}


function RatingStars({ rating, className }: RatingStarsProps): JSX.Element {
  const calculatedRating = (rating * 20);
  return (
    <div className={`${className ? className : ''} rating__stars`}>
      <span style={{ width: `${calculatedRating}%` }}></span>
      <span className="visually-hidden">Rating</span>
    </div>
  );
}

export default RatingStars;
