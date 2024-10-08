import property_1 from '../images/property_1.jpg';
import property_2 from '../images/property_2.jpg';
import property_3 from '../images/property_3.jpg';
import property_4 from '../images/property_4.jpg';
import property_5 from '../images/property_5.jpg';
import property_6 from '../images/property_6.jpg';
import bathroom_1 from '../images/bathroom_1.jpg';
import bedroom_1 from '../images/bedroom_1.jpg';
import kitchen_1 from '../images/kitchen_1.jpg'

const properties = [
  { id: 1, image: property_1, title: 'Studio Apartment', room: 1, location: 'Andheri, Mumbai', price: 30000, additionalImages: bathroom_1,  bedRoom: bedroom_1, kitchen: kitchen_1},
  { id: 2, image: property_2, title: '1 BHK Apartment', room: 1, location: 'Malad, Mumbai', price: 30000, additionalImages: bathroom_1,  bedRoom: bedroom_1, kitchen: kitchen_1},
  { id: 3, image: property_3, title: '2 BHK Apartment', room: 2, location: 'Bandra, Mumbai', price: 40000, additionalImages: bathroom_1,  bedRoom: bedroom_1, kitchen: kitchen_1 },
  { id: 4, image: property_4, title: 'Spacious 1 BHK', room: 1, location: 'Kandevali, Mumbai', price: 25000, additionalImages: bathroom_1,  bedRoom: bedroom_1, kitchen: kitchen_1},
  { id: 5, image: property_5, title: '3 BHK + Garden', room: 3, location: 'Alambagh, Lucknow', price: 30000, additionalImages: bathroom_1,  bedRoom: bedroom_1, kitchen: kitchen_1},
  { id: 6, image: property_6, title: '1 BHK + Balcony', room: 1, location: 'Vile Parle, Mumbai', price: 30000, additionalImages: bathroom_1,  bedRoom: bedroom_1, kitchen: kitchen_1},
];

export default properties;