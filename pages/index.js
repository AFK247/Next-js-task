import Content from "@/components/content";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [val,setval]=useState("red");
  function clickHandeler(event){
      const temp=event.target.innerHTML;
      // console.log("Clicked",temp)
      if(temp==="DUMP"){
        setval("white")
      }
      else if(temp==="NEXT"){
        setval("green")
      }
      else if(temp==="REVIEW") setval("yellow")

    console.log(val)

  }
  return (
    <div>
      <div className="bg-primary">
        <h5 className="text-center text-white p-2">DEMO ONLINE TEST</h5>
      </div>

      <section className="row">
        <div className="col-lg-10 col-8">
          <div className="d-flex flex-wrap gap-1">
            <button
              style={{ backgroundColor: "rgb(1, 1, 172)" }}
              className="rounded-1 ms-2 px-4 px-md-5 text-white border-0"
            >
              All Sections
            </button>
            <button className="px-4 ms-2  px-md-5 text-white bg-primary border-0 rounded-1">
              PHYSICS
            </button>
            <button className="px-4 ms-2 px-md-5 text-white bg-primary border-0 rounded-1">
              CHEMISTRY
            </button>
            <button className="px-4 ms-2 px-md-5 text-white bg-primary border-0 rounded-1">
              MATH
            </button>
          </div>

          <hr className="mx-2 mt-2 mb-1"></hr>

          <div className="m-2 border border-3">
            <div className="d-flex bg-primary justify-content-between px-2 pt-1">
              <h6 className="text-center text-white ">Q No.: 1</h6>
              <div className="d-flex">
                <h6 className="text-center text-white ">View in:</h6>
                <select className="mb-1 ms-1">
                  <option value="volvo">English</option>
                  <option value="saab">Hindi</option>
                </select>
              </div>
            </div>

            <Content></Content>
          </div>
          <div className="d-flex flex-wrap gap-1 my-3">
            <button className="rounded-1 ms-2 px-4 bg-primary text-white border-0">
              CLEAR RESPONSE
            </button>
            <button onClick={clickHandeler} className="px-4 ms-2 text-white bg-primary border-0 rounded-1">
              REVIEW
            </button>
            <button onClick={clickHandeler} className="px-4 ms-2 text-white bg-primary border-0 rounded-1">
              DUMP
            </button>
            <button className="px-4 ms-2 text-white bg-primary border-0 rounded-1">
              PREVIOUS
            </button>
            <button onClick={clickHandeler}
              style={{ backgroundColor: "rgb(1, 1, 172)" }}
              className="px-4 text-white ms-2 border-0 rounded-1"
            >
              NEXT
            </button>
          </div>
        </div>

        <div className="col-lg-2 col-4">
          <div className={styles.div1}>
            <div className="d-flex flex-column flex-sm-row">
            <Image
              className="ms-1 my-1"
              src="/person.png"
              height={100}
              width={85}
            ></Image>
            <div>
                <p className="mt-2 ms-1">
                  Time Left:<br></br>
                  02:39:29
                </p>
              <p className="ms-1 fst-italic">Ashish Kumar</p>
            </div>
            </div>
          </div>

          <div className={styles.div2}>
            <div style={{height:"30px",width:"100%"}} className="text-white bg-primary rounded-top text-center"><p className="ms-2">Question Pallete</p></div>
          <div className="d-flex flex-wrap gap-1 mx-auto">
          <button style={{backgroundColor:"green"}} type="button" class="btn rounded-0 px-3 text-dark fw-bold py-0">1</button>
          <button style={{backgroundColor:val}} type="button" class="btn rounded-0 px-3 text-dark fw-bold py-0">2</button>
          <button style={{backgroundColor:"green"}} type="button" class="btn rounded-0 px-3 text-dark fw-bold py-0">3</button>
          <button style={{backgroundColor:"green"}} type="button" class="btn rounded-0 px-3 text-dark fw-bold py-0">4</button>
          <button style={{backgroundColor:"red"}} type="button" class="btn  rounded-0 px-3 text-dark fw-bold py-0">5</button>
          <button style={{marginLeft:"1px",padding:"0px 26px",backgroundColor:"yellow"}} type="button" class="btn btn-info rounded-0 px-3 text-dark fw-bold py-0">6</button>
          <button  type="button" class="btn btn-success rounded-0 px-3 text-dark fw-bold py-0">7</button>
          <button  type="button" class="btn btn-light rounded-0 px-3 text-dark fw-bold py-0">8</button>
          <button style={{backgroundColor:"rgb(168, 90, 240)"}} type="button" class="btn rounded-0 px-3 text-dark fw-bold py-0">9</button>
          <button style={{backgroundColor:"rgb(199, 198, 198)"}} type="button" class="btn rounded-0 px-2 text-dark fw-bold py-0">10</button>
          
          </div>

          </div>
          <div className={styles.div3}>
          <div style={{height:"30px"}} className="text-white bg-primary rounded-top"><p className="ms-2">Legend (Click to View)</p></div>
          <div className="d-flex flex-wrap">
            <button style={{width:"50%"}} type="button" class="btn btn-success rounded-0 text-dark px-0 py-0">4 Answer</button>
            <button style={{width:"50%"}} type="button" class="btn btn-danger rounded-0 text-dark px-0 py-0">2 No Answer</button>
            <button style={{width:"50%",backgroundColor:"rgb(168, 90, 240)"}} type="button" class="btn rounded-0 px-0 text-dark py-0">1 Review+Ans</button>
            <button style={{width:"50%"}} type="button" class="btn btn-warning rounded-0 text-dark px-0 py-0">1 Review-Ans</button>
            <button style={{width:"50%",backgroundColor:"rgb(199, 198, 198)"}} type="button" class="btn rounded-0 text-dark px-0 py-0">1 Dump</button>
            <button style={{width:"50%"}} type="button" class="btn btn-light rounded-0 text-dark px-0 py-0">1 No Visit</button>
          </div>

          <div py-0>
            <p style={{width:"100%"}}  class="rounded-0 text-dark bg-primary text-center">10 All Questions</p>
          </div>

          <div className="d-flex flex-wrap gap-1">
            <button style={{width:"48%"}} type="button" class="btn btn-primary rounded-2  text-white">Profile</button>
            <button style={{width:"48%"}} type="button" class="btn btn-primary rounded-2  text-white">Instr</button>
            <button style={{width:"48%"}} type="button" class="btn btn-primary rounded-2  text-white">Questions</button>
            <button style={{width:"48%"}} type="button" class="btn btn-primary rounded-2  text-white">Submit</button>
            
          </div>
          </div>
        </div>
      </section>

      <div >
        <p className="bg-secondary text-center p-2">© Addmen</p>
      </div>
    </div>
  );
}
