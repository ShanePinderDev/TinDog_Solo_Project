class Dog {
  constructor(data) {
    Object.assign(this, data);
  }
  getDogHtml() {
    const { name, avatar, age, bio } = this;
    return `
    <div class="profile" style="background-image: url(${avatar});">
    <div class="profile-text-container">
      <h2 class="profile-header">${name}, ${age}</h2>
      <p class="profile-text">${bio}</p>
    </div>
  </div>
    `;
  }
  setMatchStatus(bool) {
    this.hasBeenLiked = bool;
    this.hasBeenSwiped = true;
  }
  getEndgameModalHtml() {
    return `
    <div class="endgame-modal-container">
    <div class="modal">
       <h2>More profiles coming soon!</h2>
    </div>
 </div>
    `;
  }
  getNopeImgHtml() {
    return `
    <div class="icon-container">
      <img class="icon" src="images/nope-image.png" />
    </div>
    `;
  }
  getLikeImgHtml() {
    return `
    <div class="icon-container">
    <img class="icon" src="images/like-image.png" />
  </div>
    `;
  }
}

export default Dog;
