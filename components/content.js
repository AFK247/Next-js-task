import Image from "next/image";

const Content = () => {
  return (
    <div className="row m-0 border-2">
      <div className="col-6 pe-5">
        <h6 className="text-primary ">QUESTION INSTRUCTION</h6>
        <p style={{ textAlign: "justify" }}>
          Passage You Want to hit a small box on the floor with a marble fired
          from a spring loaded gun that is mounted on a table. The target box is
          a distance R horizontally from the edges of the table; see the figure
          to the right. You compress the spring a distance d, but the center of
          the marble falls short by a distance r of the center of the box.How
          far should you compress the spring to score a direcr hit (neglect
          friction)?
        </p>
      </div>
      <div className="col-6 pe-5 ">
        <h6 className="text-primary">QUESTION</h6>
        <p style={{ textAlign: "justify" }} className="mb-0">
          A block of mass m is projected with velocity V<sub>0</sub> as shown in
          the fig. The distance between free ends is ℓ<sub>0</sub>. Maximum
          displacement of the block during the motion.
        </p>
        <Image src="/circuit.png" width={300} height={120}></Image>
        <br></br>
        <br></br>

        <div>
          <input type="radio" />
          <label>(A).</label>
          <Image src="/eq1.png" width={115} height={50}></Image>
          <br />
          <input defaultChecked type="radio" />
          <label>(B).</label> <span>  </span>
          <Image src="/eq2.png" width={115} height={55}></Image>
          <br />
          <input type="radio" />
          <label>(C). &nbsp;&nbsp;</label> 
          <Image src="/eq3.png" width={115} height={58}></Image>
          <br />
          <input type="radio" />
          <label>(D).</label><span>  </span>
          <Image src="/eq4.png" width={115} height={60}></Image>
        </div>
      </div>
    </div>
  );
};

export default Content;
