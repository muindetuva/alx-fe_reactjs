function PricingCardBootstrap() {
  // Bootstrap speeds up delivery by combining familiar component classes without writing custom CSS.
  return (
    <article className="card h-100 shadow-sm">
      <div className="card-body d-flex flex-column p-4">
        <span className="badge text-bg-primary align-self-start">Bootstrap</span>
        <h3 className="card-title mt-3">Professional</h3>
        <p className="display-6 fw-bold mb-3">$24/month</p>
        <ul className="list-group list-group-flush mb-4">
          <li className="list-group-item px-0">Unlimited projects</li>
          <li className="list-group-item px-0">Priority support</li>
          <li className="list-group-item px-0">Team analytics</li>
        </ul>
        <button className="btn btn-primary mt-auto" type="button">
          Choose Professional
        </button>
      </div>
    </article>
  )
}

export default PricingCardBootstrap
