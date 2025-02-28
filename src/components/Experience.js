import React, { useRef } from "react";
import {
  motion,
  useScroll,
} from "framer-motion";
import LiIcon from "./LiIcon";


const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-primary dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (

      <div className="my-64">
        <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
          Experience
        </h2>

        <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
          <motion.div
            className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
            style={{ scaleY: scrollYProgress }}
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
            <Details
              position="Data Engineer"
              company="VFD TECH"
              companyLink="https://vfdtech.ng/"
              time="Apr 2024 - till date"
              address="Lekki, NG"
              work="As a data engineer, I significantly enhanced operational efficiency by refactoring production code to leverage Spark for big data processing, reducing processing time from 3 hours to just 15 minutes. I developed a containerized Streamlit application that empowered cross-functional teams to independently access needed data, decreasing reliance on the data team by 40%.
              I established robust documentation practices using Confluence to ensure continuity of knowledge across all data workflows and system configurations. Working closely with Finance, Product, and Audit teams, I delivered scalable data solutions utilizing Databricks, Azure Blob Storage, and Redshift. 
              Throughout these initiatives, I maintained data integrity by implementing comprehensive validation processes that verified destination database accuracy against source data."
            />

            <Details
              position="Data Engineer Trainee"
              company="Core Data Engineer"
              companyLink="https://coredataengineers.com/"
              time="Aug 2024 - Oct 2024"
              address="Berlin, Germany."
              work="I implemented robust data orchestration solutions leveraging AWS cloud infrastructure and Docker containers, creating scalable and reproducible data engineering environments. 
              By designing sophisticated data modeling and transformation strategies with DBT, I developed modular and maintainable data pipeline architectures that significantly enhanced both team productivity and data reliability. 
              Additionally, I created comprehensive documentation for data operations procedures and system configurations, facilitating seamless knowledge transfer and operational continuity across teams."
            />

            <Details
              position="Data Engineer(Freelance)"
              company="Upwork"
              companyLink="https://www.upwork.com/freelancers/~01dd61eb34960c08e1"
              time="Oct 2023 - Oct 2024"
              address="California, US."
              work="I partnered with a fintech startup to architect and deploy a scalable data pipeline utilizing Apache Kafka and AWS Cloud Services, enabling real-time financial data processing and analysis. 
              For a healthcare client, I engineered a comprehensive data integration solution using Python and Apache Spark that successfully consolidated disparate data sources, substantially improving data accessibility and decision-making capabilities. 
              Additionally, I developed customized ETL workflows for an e-commerce platform by leveraging Airflow and Redshift, which streamlined data transformation processes and delivered actionable business intelligence insights that drove strategic decision-making."
            />

            
          </ul>
        </div>
        </div>
    );
};

export default Experience;
