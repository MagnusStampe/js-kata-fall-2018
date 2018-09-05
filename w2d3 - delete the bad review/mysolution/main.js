document.addEventListener("DOMContentLoaded", init);
let reviews;
function init() {
  reviews = document.querySelectorAll("li");

  removeReviewes(reviews, 5);
}

function removeReviewes(item, lowest) {
  reviews.forEach(review => {
    const ratio = review.("span").innerHTML;
    if (ratio < lowest) {
      review.innerHTML = "";
    }
  });
}
