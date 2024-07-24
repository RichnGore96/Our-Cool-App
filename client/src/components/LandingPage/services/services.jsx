
import React from "react";

function Services() {
  

    return (
      <section className="Services-section">
        <h2>Our Services</h2>
        <div className="Service-cards">
          <ServiceCard
            title="Haircut"
            description="Stylish haircuts tailored to your preferences."
            imageUrl="https://c8.alamy.com/comp/2J42G7M/hair-salon-abstract-concept-vector-illustration-hairdressing-service-haircut-styling-woman-beauty-salon-professional-tools-and-cosmetic-beautiful-2J42G7M.jpg"
            
            link="hhttps://en.wikipedia.org/wiki/Hairdresser"       
          />
          <ServiceCard
            title="Hair Coloring"
            description="Professional hair coloring services for a new look."
            imageUrl="https://image.freepik.com/premium-vector/color-application-with-bowl-brush-hair-colorist-vector-design-beauty-personal-care_135661-988.jpg"
                    
          />
          <ServiceCard
            title="Hair Styling"
            description="Perfect hairstyles for any occasion."
            imageUrl="https://st4.depositphotos.com/3557671/24642/v/1600/depositphotos_246428320-stock-illustration-female-hairstyle-cartoonblack-icons-in.jpg"
            
         />
        </div>
      </section>
    );
  }
  function ServiceCard({ title, description, imageUrl, onClick}) {
   
    return (
      <div className="Service-card" >
        <img src={imageUrl} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  }

export default Services;

// Logo :https://media.istockphoto.com/id/1423644802/vector/set-of-hairdressing-accessories.jpg?s=612x612&w=0&k=20&c=DT2iEN6kIGSFFisv4i---sX1jcAkJrzptUZOONEg0sw=
