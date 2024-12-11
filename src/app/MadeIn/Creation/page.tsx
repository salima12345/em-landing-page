import React from 'react';
import MadeInModel, { Service } from '../MadeInModel';

const creationServices: Service[] = [
  { title: 'Marketing' },
  { title: 'Branding and Identity' },
  { title: 'Website' },
  { title: 'Content Strategy' },
  { title: 'Media Relations' },
  { title: 'Social Media Management' },
  { title: 'Web maintenance and outsourcing' }
];

const creationDescription = [
  "We understand the unique challenges that emerging entities face as they enter the market.",
  "That is why we have developed a specialized package tailored to address your unique needs and enhance your communication strategy.",
  "Through Jump, we embrace the power of innovative ideas and are dedicated to supporting young entrepreneurs on their creative journey."
];

function Creation() {
  return (
    <div>
      <MadeInModel
        subtitle="Creation and Launch"
        title="Take the leap!"
        imageSrc="https://www.eliott-markus.com/wp-content/uploads/2023/05/jump.png"
        imageAlt="Take the Leap"
        description={creationDescription}
        services={creationServices}
      />
    </div>
  );
}

export default Creation;