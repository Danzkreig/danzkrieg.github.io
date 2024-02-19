function GookGee({ name, gender, employment, email }) {
  return (
    <div>
      <img src="https://yellow-face.com/images/gook.jpg" alt="gook" />
      <div>
        <div>
          {name}, {gender}
        </div>
        <div>{employment}</div>
        <div>Contact at {email}</div>
      </div>
    </div>
  );
}

export default GookGee;
