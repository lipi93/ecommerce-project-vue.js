<template>
  <div className="container">
    <div
      id="carouselExampleInterval"
      class="carousel slide mt-3 mb-5"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="10000">
          <img src="@/assets/images/2i.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img src="@/assets/images/5i.jpeg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="@/assets/images/4i.jpeg" class="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.carousel-item {
  width: 100%;
  height: 400px;
  object-fit: cover;
  margin-top: 20px;
}
.carousel-item img {
  width: 100%;
  height: 400px;
  object-fit: cover;
}
.img-box {
  margin: auto;
  object-fit: cover;
}
</style>
