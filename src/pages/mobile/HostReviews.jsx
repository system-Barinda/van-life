import "../../styles/HostReviews.css"

export default function HostReviews() {
  return (
    <section className="host-reviews">

      {/* Title */}
      <div className="reviews-header">
        <h2>Your reviews</h2>
        <span className="last-days">last <strong>30 days</strong></span>
      </div>

      {/* Overall Rating */}
      <div className="overall-rating">
        <h3>5.0 <span className="star">★</span></h3>
        <span className="overall-text">overall rating</span>
      </div>

      {/* Rating Breakdown */}
      <div className="rating-breakdown">
        {[
          { stars: 5, percent: 100 },
          { stars: 4, percent: 0 },
          { stars: 3, percent: 0 },
          { stars: 2, percent: 0 },
          { stars: 1, percent: 0 }
        ].map(item => (
          <div key={item.stars} className="rating-row">
            <span>{item.stars} stars</span>
            <div className="bar">
              <div
                className="bar-fill"
                style={{ width: `${item.percent}%` }}
              ></div>
            </div>
            <span>{item.percent}%</span>
          </div>
        ))}
      </div>

      {/* Reviews */}
      <div className="reviews-list">
        <h4>Reviews (2)</h4>

        <div className="review-card">
          <div className="review-stars">★★★★★</div>
          <p className="review-meta">
            <strong>Elliot</strong> December 1, 2022
          </p>
          <p className="review-text">
            The beach bum is such an awesome van! Such as comfortable trip.
            We had it for 2 weeks and there was not a single issue.
            Super clean when we picked it up and the host is very
            comfortable and understanding. Highly recommend!
          </p>
        </div>

        <div className="review-card">
          <div className="review-stars">★★★★★</div>
          <p className="review-meta">
            <strong>Sandy</strong> November 23, 2022
          </p>
          <p className="review-text">
            This is our third time using the Modest Explorer for our travels
            and we love it! No complaints, absolutely perfect!
          </p>
        </div>

      </div>

    </section>
  )
}