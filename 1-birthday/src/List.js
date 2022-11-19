import React from "react";

const List = ({ people, setPeople }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        const clearOne = (id) => {
          console.log(people);
          let newPeople = people.filter((person) => person.id !== id);
          console.log(newPeople);
          setPeople(newPeople);
        };
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years old</p>
            </div>
            <button className="btn-small" onClick={() => clearOne(id)}>
              done
            </button>
          </article>
        );
      })}
    </>
  );
};

export default List;
