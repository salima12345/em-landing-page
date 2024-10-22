module.exports = {
    Swiper: ({ children, className }) => (
      <div data-testid="swiper" className={className}>{children}</div>
    ),
    SwiperSlide: ({ children }) => (
      <div data-testid="swiper-slide">{children}</div>
    )
  }