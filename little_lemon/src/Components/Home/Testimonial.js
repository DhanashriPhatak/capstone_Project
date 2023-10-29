import customer1Image from '../../img/customer1.jpg';
import customer2Image from '../../img/customer2.jpg';
import customer3Image from '../../img/customer3.jpg';
import customer4Image from '../../img/customer4.jpg';
import './Testimonial.css';
import CardT from './CardT';

const customers = [
  {
    fullName: 'Meredith Grey',
    image: customer4Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    fullName: 'Derek shephard',
    image: customer2Image,
    rating: [1, 1, 1, 1, 1],
    says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    fullName: 'Alex Gilbert',
    image: customer3Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    fullName: 'Damon Salvatore',
    image: customer1Image,
    rating: [1, 1, 1, 1],
    says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
];

const Testimonial = () => {
  return (
    <section className="testimonials">
      <div className="container grid">
        <h2>What people say about us!</h2>
        {customers.map((customer, index) =>
          <CardT key={index} customer={customer} />
        )}
     </div>
    </section>
  );
};

export default Testimonial;
