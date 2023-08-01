import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2007 - 2022</p>
          <h2 className="text-4xl font-bold">Company Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Cross-Platform Compatibility"
            subTitle="Ensuring Consistent User Experience Across Devices"
            result="Success"
            des="Implemented Responsive Design
            To address cross-platform compatibility, I employed responsive design techniques, ensuring that our web applications rendered flawlessly on various devices and screen sizes. By maintaining a consistent user experience, we increased user satisfaction and engagement."
          />
          <ResumeCard
            title="High Server Costs"
            subTitle="Reducing Infrastructure Expenses"
            result="Success"
            des="Utilized Cloud Services and Server Optimization
            To lower server costs, I migrated certain services to cloud-based solutions, optimizing resources as needed. Additionally, I applied server optimization techniques, such as compressing files and implementing server-side caching, resulting in significant cost savings while maintaining performance."
          />
          <ResumeCard
            title="Continuous Deployment"
            subTitle="Streamlining Deployment Process for Faster Releases"
            result="Success"
            des="Implemented CI/CD Pipelines
            To streamline the deployment process and achieve faster releases, I set up Continuous Integration and Continuous Deployment (CI/CD) pipelines. These automated pipelines enabled efficient code testing, integration, and deployment to production environments. By reducing manual intervention and ensuring quicker feedback loops, we accelerated the delivery of new features and bug fixes to end-users."
          />
        </div>
      </div>
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2007 - 2022</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Scalability and Performance"
            subTitle="Handling Surging Traffic During Product Launch."
            result="Success"
            des="Implemented Load Balancing and Caching
            To cope with the massive influx of users during the product launch, I set up load balancing across multiple servers to distribute the incoming traffic evenly. Additionally, I implemented caching strategies to reduce database queries and improve response times, ensuring a smooth user experience even during peak traffic."
          />
          <ResumeCard
            title="Security Vulnerabilities"
            subTitle="Mitigating Data Breach Risks"
            result="Success"
            des="Conducted Regular Security Audits and Patches
            To address security vulnerabilities, I conducted frequent security audits to identify potential loopholes. By staying up-to-date with security patches and best practices, we minimized the risk of data breaches and unauthorized access, ensuring data integrity and user trust."
          />
          <ResumeCard
            title="Performance Bottlenecks"
            subTitle="Resolving Slow API Responses"
            result="Success"
            des="Profiled and Optimized Code
            I identified performance bottlenecks by profiling API endpoints. After pinpointing the inefficient code sections, I refactored and optimized the code to improve response times. This resulted in faster API performance, leading to enhanced overall system efficiency."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
