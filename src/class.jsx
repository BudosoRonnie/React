function ClassComponent() {
  class Bike {
    constructor(name) {
      this.brand = name
    }

    present() {
      return "I have a " + this.brand
    }
  }

  const mybike = new Bike("Mountain Peak")

  return (
    <>
      <h5>{mybike.present()}</h5>
    </>
  )
}

export default ClassComponent
