import BookingBenefits from "../Component/BookingBenefits";
import BookingForm from "../Component/BookingForm";
import BookingHero from "../Component/BookingHero";
import OpeningHours from "../Component/OpeningHours";

function Booking() {
  return (
    <>
      <BookingHero />
      <BookingForm/>
      <OpeningHours/>
      <BookingBenefits/>
    </>
  );
}

export default Booking;
