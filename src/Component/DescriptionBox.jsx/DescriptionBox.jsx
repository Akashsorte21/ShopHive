import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
      <div className="descriptionbox-nav-box fade">Description</div>
      <div className="descriptionbox-nav-box fade">Reviews (122)</div>
    </div>
        <div className="descriptionbox-description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quis itaque iusto maiores velit expedita! Autem laborum quasi debitis, iste eos, ab doloremque nostrum inventore ducimus, eligendi assumenda voluptate adipisci?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi natus, iste dolore dolorum velit iure sequi quasi earum cum aliquam animi asperiores omnis quia cumque quidem fugiat eius ab saepe?</p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nulla adipisci voluptatem. Animi provident a facere accusamus ex, neque nam dicta deleniti dolor, laudantium in!
            </p>
        </div>
    </div>

  );
};

export default DescriptionBox;
