import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './styles.scss';

type ImageSliderProps = {
  imgSlider?: {
    sliderTitle?: string;
    images?: string[];
    sliderDescription?: string;
  }
}
export const ImageSlider = ({ imgSlider }: ImageSliderProps) => {
  return (
    <>
      {imgSlider && (
        <section className="single-project-slider">
          <div>
            {imgSlider.sliderTitle && <h2>{imgSlider.sliderTitle}</h2>}
            {imgSlider.sliderDescription && (
              <p>{imgSlider.sliderDescription}</p>
            )}
          </div>
          <div>
            <Carousel showThumbs={false} showStatus={false}>
              {imgSlider && imgSlider?.images?.map((img, i) => {
                return (
                  <div key={i}>
                    <img src={img} alt="screenshots slider" loading="lazy" />
                  </div>
                );
              })}
            </Carousel>
          </div>
        </section>
      )}
    </>
  );
};