export const ReviewsProduct = (props) =>{
    console.log(props);
    const reviews = props.product ;
    console.log(reviews);
    
    if (!reviews || reviews.length === 0) {
        return <p className="text-center">No reviews found</p>;
    }

    return (
        <>
            <h2 className="mb-3">Product Reviews</h2>
            <div className="list-group">
                {reviews.map((review, index) => (
                    <div key={index} className="d-flex">
                        <h5 className="fw-bold">{review.reviewerName}</h5>
                        <p className="text-muted">{new Date(review.date).toLocaleDateString()}</p>
                        <p>{review.comment}</p>
                        <p className="fw-bold">Rating: ⭐ {review.rating} / 5</p>
                    </div>
                ))}
            </div>
        </>
    );
}