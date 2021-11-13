function OtherDetails(props) {
  return (
    <div className="other">
      <p>{"Specialty : " + props.specialty}</p>
      <p>{"Weight : " + props.weight}</p>
      <p>{"Weight : " + props.weight}</p>
      <p>{"Greased : " + (props.greased ? "Yes":"No")}</p>
      <p>{"Highest Medal Achieved : " + props.medal}</p>
    </div>
  )
}

export default OtherDetails;