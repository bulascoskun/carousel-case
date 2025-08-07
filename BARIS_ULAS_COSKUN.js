(() => {
  const buildHTML = () => {
    const html = `
      <div class="container custom-container">
        <div class="title-container">
          <h2 class="custom-title-primary">Beğenebileceğinizi Düşündüklerimiz</h2>
        </div>
        <div class="carousel-container">
          <div class="carousel-items"></div>
          <button id="carousel-prev" class="carousel-button prev"></button>
          <button id="carousel-next" class="carousel-button next"></button>
        </div>
      </div>
    `;
    const wrapper = document.querySelector('.ins-preview-wrapper');
    if (wrapper) {
      wrapper.insertAdjacentHTML('afterend', html);
    }
  };

  const buildCSS = () => {
    const css = `
    
.custom-container {
  padding-bottom: 50px;
}

.title-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fef6eb;
  padding: 25px 67px;
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
  font-weight: 700;
}

.custom-title-primary {
  font-family: Quicksand-Bold;
  font-size: 3rem;
  font-weight: 700;
  color: #f28e00;
  margin: 0;
}

@media (max-width: 480px) {
  .custom-title-primary {
    font-size: 2.2rem;
    line-height: 1.5;
  }

  .title-container {
    padding: 0 22px 0 10px;
    background-color: #fff;
  }

  .carousel-container {
    box-shadow: none;
  }
}

h1 {
  font-size: 3rem;
  font-weight: 700;
  color: #f28e00;
  margin: 0;
}

.carousel-container {
  position: relative;
  padding: 20px 0;
  box-shadow: 15px 15px 30px 0 #ebebeb80;
  border-bottom-left-radius: 35px;
  border-bottom-right-radius: 35px;
}

.carousel-items {
  white-space: nowrap;
  overflow: hidden;
  display: flex;
  flex-wrap: nowrap;
  scroll-behavior: smooth;
}

.carousel-items.dragging {
  cursor: grab;
  scroll-behavior: auto;
}

.carousel-button {
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  bottom: 50%;
  top: auto;
  border: 1px solid #0000;
}

.carousel-button.next {
  background: url(https://cdn06.e-bebek.com/assets/svg/next.svg) no-repeat;
  background-color: #fef6eb;
  background-position: 18px;
  right: -65px;
}

.carousel-button.prev {
  background: url(https://cdn06.e-bebek.com/assets/svg/prev.svg) no-repeat;
  background-color: #fef6eb;
  background-position: 18px;
  left: -65px;
}

.carousel-button:hover {
  background-color: #fff;
  border: 1px solid #f28e00;
}

.custom-product-item {
  display: block;
  flex-shrink: 0;
  padding: 5px;
  color: #7d7d7d;
  border: 1px solid #ededed;
  border-radius: 10px;
  position: relative;
  background-color: #fff;
  transition: transform 0.3s ease;
  margin-right: 20px;
  width: calc((100% / 2) - 8.5px);
}

@media (min-width: 940px) {
  .custom-product-item {
    width: calc((100% / 3) - 12.5px);
  }
}
@media (min-width: 1280px) {
  .custom-product-item {
    width: calc((100% / 4) - 14.2px);
  }
}
@media (min-width: 1480px) {
  .custom-product-item {
    width: calc((100% / 5) - 15.5px);
  }
}

.custom-product-item-link {
  text-decoration: none;
  color: #7d7d7d;
}

.custom-product-item:hover {
  box-shadow: 0 0 0 0 #00000030, inset 0 0 0 3px #f28e00;
}

.item-image-container {
  position: relative;
  height: 150px;
  width: 100%;
  margin-bottom: 65px;
}
@media (min-width: 480px) {
  .item-image-container {
    height: 203px;
  }
}

.heart {
  position: absolute;
  right: 15px;
  top: 10px;
  cursor: pointer;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.14);
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 0;
  transition: all 0.2s ease;
}

.heart:hover {
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.37);
}

.heart .heart-icon {
  display: block;
  width: 25px;
  height: 25px;
}
.heart .heart-add,
.heart .favorite-heart-icon,
.heart .favorite-heart-add {
  display: none;
}

.heart:hover .heart-icon {
  display: none;
}
.heart:hover .heart-add {
  display: block;
  width: 50px;
  height: 50px;
}

.heart.favorite .heart-icon,
.heart.favorite .heart-add {
  display: none;
}
.heart.favorite .favorite-heart-icon {
  display: block;
  width: 50px;
  height: 50px;
}

.heart.favorite:hover .favorite-heart-icon {
  display: none;
}
.heart.favorite:hover .favorite-heart-add {
  display: block;
  width: 50px;
  height: 50px;
}

.item-image {
  height: 100%;
  width: 100%;
  object-fit: contain;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  pointer-events: none;
}

.brand-info {
  font-size: 1.2rem;
  height: 42px;
  overflow: hidden;
  margin-bottom: 10px;
  text-wrap: wrap;
}

.item-info-container {
  padding: 0px 17px 17px 17px;
}

.button-container {
  display: flex;
  justify-content: center;
  padding: 0px 17px 17px 17px;
}

.add-to-cart {
  cursor: pointer;
  width: 100%;
  padding: 15px 20px;
  border-radius: 37.5px;
  background-color: #fff7ec;
  color: #f28e00;
  font-size: 1.4rem;
  font-weight: 700;
  border-color: transparent;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out;
}

.add-to-cart:hover {
  background-color: #f28e00;
  color: #fff;
}

.stars-container {
  padding: 5px 0 15px;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
}

.promotions {
  min-height: 70px;
  padding-left: 7.5px;
}

.promotion {
  background: #eaf8f3;
  color: #4bb788;
  border-radius: 15px;
  width: fit-content;
  padding: 5.5px 9px 4.5px;
  font-weight: 600;
  font-size: 1.1rem;
  text-wrap: wrap;
}

.custom-product-item-link {
  color: inherit;
  text-decoration: none;
}

.custom-product-item-link:hover {
  color: inherit;
}

.price-container {
  position: relative;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  height: 43px;
}

.current-price {
  width: 100%;
  font-size: 2.2rem;
  font-weight: 600;
}

.current-price.green {
  color: #00a365;
}

.old-price-container {
  display: flex;
  align-items: center;
}

.old-price {
  font-size: 1.4rem;
  font-weight: 500;
  text-decoration: line-through;
}

.discount-rate {
  color: #00a365;
  font-size: 18px;
  font-weight: 700;
  display: inline-flex;
  justify-content: center;
  margin-left: 0.5rem;
}

    `;

    const styleTag = document.createElement('style');
    styleTag.classList.add('carousel-style');
    styleTag.textContent = css;
    document.head.appendChild(styleTag);
  };

  const formatNumber = (number) => {
    if (!number) return '';

    const formatted = new Intl.NumberFormat('tr-TR', {
      style: 'decimal',
    }).format(number);

    return formatted;
  };

  const fetchProducts = async () => {
    const url =
      'https://gist.githubusercontent.com/sevindi/8bcbde9f02c1d4abe112809c974e1f49/raw/9bf93b58df623a9b16f1db721cd0a7a539296cf0/products.json';
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Hata! (Hata Kodu:${response.status})`);
      }
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error.message);
    }
  };

  const setCarouselEvents = () => {
    const carouselItems = document.querySelector('.carousel-items');
    const firstItem = document.querySelector('.custom-product-item');

    let isDragging = false;
    let startX = 0;
    let scrollStart = 0;
    let scrollDiff = 0;
    let hasDragged = false;

    //#region Prev / Next Carousel
    const moveCarousel = (direction) => {
      const cardWidth = firstItem.clientWidth + 20 + 2;
      const maxScroll = carouselItems.scrollWidth - carouselItems.clientWidth;
      const scrollAmount = direction === 'next' ? cardWidth : -cardWidth;

      carouselItems.scrollLeft = Math.min(
        Math.max(carouselItems.scrollLeft + scrollAmount, 0),
        maxScroll
      );
    };

    document
      .getElementById('carousel-prev')
      ?.addEventListener('click', () => moveCarousel('prev'));
    document
      .getElementById('carousel-next')
      ?.addEventListener('click', () => moveCarousel('next'));

    addEventListener('resize', () => {
      moveCarousel('prev');
    });
    //#endregion

    //#region Dragging Func.
    const autoCenterImage = () => {
      const cardWidth = firstItem.clientWidth + 22;
      const offset = carouselItems.scrollLeft % cardWidth;
      const maxScroll = carouselItems.scrollWidth - carouselItems.clientWidth;

      if (
        carouselItems.scrollLeft > 0 &&
        carouselItems.scrollLeft < maxScroll
      ) {
        if (offset > cardWidth / 3) {
          carouselItems.scrollLeft += cardWidth - offset;
        } else {
          carouselItems.scrollLeft -= offset;
        }
      }
    };

    const startDragging = (event) => {
      isDragging = true;
      hasDragged = false;
      startX = event.pageX || event.touches[0].pageX;
      scrollStart = carouselItems.scrollLeft;
      carouselItems.classList.add('dragging');
    };

    const duringDrag = (event) => {
      if (!isDragging) return;
      hasDragged = true;

      const currentX = event.pageX || event.touches[0].pageX;
      scrollDiff = currentX - startX;

      carouselItems.scrollLeft = scrollStart - scrollDiff;
    };

    const stopDragging = (e) => {
      if (!isDragging) return;

      isDragging = false;
      carouselItems.classList.remove('dragging');

      if (hasDragged) {
        e.preventDefault();
      }

      if (Math.abs(scrollDiff) > 10) {
        autoCenterImage();
      }
    };

    carouselItems.addEventListener('click', (e) => {
      if (hasDragged && e.target.closest('a')) {
        e.preventDefault();
      }
    });

    carouselItems.addEventListener('mousedown', startDragging);
    carouselItems.addEventListener('touchstart', startDragging);

    carouselItems.addEventListener('mousemove', duringDrag);
    carouselItems.addEventListener('touchmove', duringDrag);

    carouselItems.addEventListener('mouseup', stopDragging);
    carouselItems.addEventListener('touchend', stopDragging);
    //#endregion
  };

  const handleFavoriteEvents = () => {
    const handleFavorite = (event) => {
      event.preventDefault();
      const productId = event.currentTarget.dataset.productId;

      const favoriteButton = document.querySelector(
        `.heart[data-product-id="${productId}"]`
      );
      if (!favoriteButton) return;

      const isCurrentlyFavorite = favoriteButton.classList.contains('favorite');
      favoriteButton.classList.toggle('favorite', !isCurrentlyFavorite);

      const productItems = localStorage.getItem('productItems');
      const itemsArray = JSON.parse(productItems);

      const updatedItems = itemsArray.map((item) => {
        if (item.id === +productId) {
          return {
            ...item,
            isFavorite: !item.isFavorite,
          };
        }
        return item;
      });

      localStorage.setItem('productItems', JSON.stringify(updatedItems));
    };

    const favoriteButtons = document.querySelectorAll('.heart');

    favoriteButtons.forEach((button) => {
      button.addEventListener('click', (e) => {
        handleFavorite(e);
      });
      button.addEventListener('touchstart', (e) => {
        handleFavorite(e);
      });
    });
  };

  const renderProducts = async () => {
    const productItems = localStorage.getItem('productItems');
    let itemsArray = [];

    if (!productItems) {
      const itemsFromApiCall = await fetchProducts();
      const mappedItems = itemsFromApiCall.map((item) => {
        return {
          ...item,
          isFavorite: false,
        };
      });
      localStorage.setItem('productItems', JSON.stringify(mappedItems));
      itemsArray = mappedItems;
    } else {
      itemsArray = JSON.parse(productItems);
    }

    const carouselItems = document.querySelector('.carousel-items');

    itemsArray.forEach((item) => {
      createProductItem(item, carouselItems);
    });
  };

  const createProductItem = (item, container) => {
    const { id, brand, name, url, img, price, original_price, isFavorite } =
      item;

    let priceHTML = '';
    if (price < original_price) {
      const discountRate = Math.trunc((1 - price / original_price) * 100);
      priceHTML = `
          <div class="price-container">
            <div class="old-price-container">
              <span class="old-price">${formatNumber(original_price)} TL</span>
              <div class="discount-rate">
                <span>%${discountRate}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="27"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#00a365"
                    d="M12.01 2.011c.852 0 1.668.34 2.267.942l.698.698A1.2 1.2 0 0 0 15.82 4h1a3.2 3.2 0 0 1 3.2 3.2v1c0 .316.126.62.347.843l.698.698a3.2 3.2 0 0 1 .002 4.536l-.698.698a1.2 1.2 0 0 0-.349.845v1a3.2 3.2 0 0 1-3.2 3.2h-1a1.2 1.2 0 0 0-.843.347l-.698.698a3.2 3.2 0 0 1-4.536.002l-.698-.698a1.2 1.2 0 0 0-.845-.349h-1a3.2 3.2 0 0 1-3.2-3.2v-1a1.2 1.2 0 0 0-.347-.843l-.698-.698a3.2 3.2 0 0 1-.002-4.536l.698-.698A1.2 1.2 0 0 0 4 8.2v-1l.005-.182A3.2 3.2 0 0 1 7.2 4h1a1.2 1.2 0 0 0 .843-.347l.698-.698a3.2 3.2 0 0 1 2.269-.944M14.5 13a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m1.207-4.707a1 1 0 0 0-1.414 0l-6 6a1 1 0 0 0 1.414 1.414l6-6a1 1 0 0 0 0-1.414M9.5 8a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3"
                  />
                </svg>
              </div>
            </div>
            <div class="current-price green">${formatNumber(price)} TL</div>
          </div>
    `;
    } else {
      priceHTML = `
          <div class="price-container">
            <div class="current-price">${formatNumber(price)} TL</div>
          </div>
    `;
    }

    const itemToAdd = `
          <div class="custom-product-item data-product-id="${id}">
            <a draggable="false" class="custom-product-item-link" href="${url}" target="_blank">
              <div class="item-image-container">
                <img class="item-image" src="${img}" alt="${brand} - ${name}" />
                <button
                  data-product-id="${id}"
                  class="heart${isFavorite ? ' favorite' : ''}"
                >
                  <img
                    id="default-favorite"
                    src="https://www.e-bebek.com/assets/svg/default-favorite.svg"
                    class="heart-icon"
                  />
                  <img
                    src="https://www.e-bebek.com/assets/svg/default-hover-favorite.svg"
                    class="heart-add"
                  />
                  <img
                    src="https://www.e-bebek.com/assets/svg/added-favorite.svg"
                    class="favorite-heart-icon"
                  />
                  <img
                    src="https://www.e-bebek.com/assets/svg/added-favorite-hover.svg"
                    class="favorite-heart-add"
                  />
                </button>
              </div>
              <div class="item-info-container">
                <h2 class="brand-info"><b>${brand} -</b> <span>${name}</span></h2>
                <div class="stars-container">
                <div>
                    ${`<svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#fed100"
                        d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z"
                      /></svg
                    >`.repeat(5)}
                </div>
                <div class="view-count">(100)</div>
              </div>
              ${priceHTML}
              </div>
              <div class="promotions">
                <div class="promotion">Farklı Ürünlerde 3 Al 2 Öde</div>
              </div>
            </a>
            <div class="button-container">
              <button class="add-to-cart">Sepete Ekle</button>
            </div>
          </div>
      `;

    if (container) {
      container.insertAdjacentHTML('beforeend', itemToAdd);
    }
  };

  const init = async () => {
    const pathname = window.location.pathname;
    if (pathname !== '/') {
      console.log('Wrong Page!');
      return;
    }

    buildHTML();
    buildCSS();
    await renderProducts();
    handleFavoriteEvents();
    setCarouselEvents();
  };

  init();
})();
