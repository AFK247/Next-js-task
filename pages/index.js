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
    <>
      <div className={styles.demo}>
        <h5 className="text-center text-white p-2">DEMO ONLINE TEST</h5>
      </div>

      <section className="row container">
        <div className="col-11">
          <div className="d-flex gap-2">
            <button
              style={{ backgroundColor: "rgb(1, 1, 172)" }}
              className="rounded-1 ms-2 px-5 text-white border-0"
            >
              All Sections
            </button>
            <button className="px-5 text-white bg-primary border-0 rounded-1">
              PHYSICS
            </button>
            <button className="px-5 text-white bg-primary border-0 rounded-1">
              CHEMISTRY
            </button>
            <button className="px-5 text-white bg-primary border-0 rounded-1">
              MATH
            </button>
          </div>

          <hr className="col-12 mx-2 mt-2 mb-1"></hr>

          <div style={{ height: "545px" }} className="m-2 border border-3">
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
          <div className="d-flex gap-2 my-3">
            <button className="rounded-1 ms-2 px-4 bg-primary text-white border-0">
              CLEAR RESPONSE
            </button>
            <button onClick={clickHandeler} className="px-4 text-white bg-primary border-0 rounded-1">
              REVIEW
            </button>
            <button onClick={clickHandeler} className="px-4 text-white bg-primary border-0 rounded-1">
              DUMP
            </button>
            <button className="px-4 text-white bg-primary border-0 rounded-1">
              PREVIOUS
            </button>
            <button onClick={clickHandeler}
              style={{ backgroundColor: "rgb(1, 1, 172)" }}
              className="px-4 text-white  border-0 rounded-1"
            >
              NEXT
            </button>
          </div>
        </div>

        <div className="col-1">
          <div className={styles.div1}>
            <Image
              className="ms-2 mt-1"
              src="/person.png"
              height={120}
              width={110}
            ></Image>
            <div>
              <div className="d-flex">
                <p className="mt-3 ms-4">
                  Time <br></br>Left:
                </p>
                <p className="mt-4 ms-4">02:39:29</p>
              </div>
              <p className="ms-4 fst-italic">Ashish Kumar</p>
            </div>
          </div>
          <div className={styles.div2}>
            <div style={{height:"30px"}} className="text-white bg-primary rounded-top"><p className="ms-2">Question Pallete</p></div>
          <div class="btn-group " role="group" aria-label="Basic example">
            <button style={{marginLeft:"1px",padding:"0px 26px",backgroundColor:"green"}} type="button" class="btn rounded-0 text-dark fw-bold">1</button>
            <button style={{marginLeft:"1px",padding:"0px 26px",backgroundColor:val}} type="button" class="btn  rounded-0 text-dark fw-bold">2</button>
            <button style={{marginLeft:"1px",padding:"0px 26px",backgroundColor:"green"}} type="button" class="btn rounded-0 text-dark fw-bold">3</button>
            <button style={{marginLeft:"1px",padding:"0px 26px",backgroundColor:"green"}} type="button" class="btn rounded-0 text-dark fw-bold">4</button>
            <button style={{marginLeft:"1px",padding:"0px 27px",backgroundColor:"red"}} type="button" class="btn btn-danger rounded-0 text-dark fw-bold">5</button>
          </div>

          <div class="btn-group" role="group" aria-label="Basic example">
            <button style={{marginLeft:"1px",padding:"0px 26px",backgroundColor:"yellow"}} type="button" class="btn rounded-0 text-dark fw-bold">6</button>
            <button style={{marginLeft:"1px",padding:"0px 26px"}} type="button" class="btn btn-success rounded-0 text-dark fw-bold">7</button>
            <button style={{marginLeft:"1px",padding:"0px 26px"}} type="button" class="btn btn-light rounded-0 text-dark fw-bold">8</button>
            <button style={{marginLeft:"1px",padding:"0px 26px",backgroundColor:"rgb(168, 90, 240)"}} type="button" class="btn rounded-0 text-dark fw-bold">9</button>
            <button style={{marginLeft:"1px",padding:"0px 23px",backgroundColor:"rgb(199, 198, 198)"}} type="button" class="btn rounded-0 text-dark fw-bold">10</button>
          </div>

          </div>
          <div className={styles.div3}>
          <div style={{height:"30px"}} className="text-white bg-primary rounded-top"><p className="ms-2">Legend (Click to View)</p></div>
          <div class="btn-group " role="group" aria-label="Basic example">
            <button style={{marginLeft:"1px",padding:"0px 92px 0px 3px"}} type="button" class="btn btn-success rounded-0 text-dark ">4 Answer</button>
            <button style={{marginLeft:"1px",padding:"0px 64px 0px 3px"}} type="button" class="btn btn-danger rounded-0 text-dark ">2 No Answer</button>
            
          </div>
          <br></br>

          <div class="btn-group" role="group" aria-label="Basic example">
            <button style={{marginLeft:"1px",padding:"0px 58px 0px 3px",backgroundColor:"rgb(168, 90, 240)"}} type="button" class="btn rounded-0 text-dark ">1 Review+Ans</button>
            <button style={{marginLeft:"1px",padding:"0px 59px 0px 3px"}} type="button" class="btn btn-warning rounded-0 text-dark ">1 Review-Ans</button>
            
          </div>
          <br></br>

          <div class="btn-group" role="group" aria-label="Basic example">
            <button style={{marginLeft:"1px",padding:"0px 100px 0px 3px",backgroundColor:"rgb(199, 198, 198)"}} type="button" class="btn rounded-0 text-dark ">1 Dump</button>
            <button style={{marginLeft:"1px",padding:"0px 86px 0px 3px"}} type="button" class="btn btn-light rounded-0 text-dark ">1 No Visit</button>
            
          </div>
          <div class="btn-group" role="group" aria-label="Basic example">
            <p style={{marginLeft:"1px",padding:"0px 103px 0px 102px"}}  class="rounded-0 text-dark bg-primary text-center">10 All Questions</p>
            
          </div>
          <hr className="my-0 text-white "></hr>
          <div class="btn-group mt-3" role="group" aria-label="Basic example">
            <button style={{marginLeft:"8px",padding:"0px 60px 0px 50px"}} type="button" class="btn btn-primary rounded-2 text-white ">Profile</button>
            <button style={{marginLeft:"20px",padding:"0px 60px 0px 40px"}} type="button" class="btn btn-primary rounded-2 text-white ">Instr</button>
            
          </div>
          <div class="btn-group" role="group" aria-label="Basic example">
            <button style={{marginLeft:"8px",padding:"0px 42px 0px 42px"}} type="button" class="btn btn-primary rounded-2 text-white mt-1">Questions</button>
            <button style={{marginLeft:"20px",padding:"0px 50px 0px 32px"}} type="button" class="btn btn-primary rounded-2 text-white mt-1">Submit</button>
            
          </div>
          </div>
        </div>
      </section>

      <div className={styles.footer}>
        <p className="">© Addmen</p>
      </div>
    </>
  );
}
