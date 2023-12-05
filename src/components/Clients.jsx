import { clients } from "../constants";
import styles from "../style";
import React from "react";

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div
          key={client.id}
          className={`transition-all flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[150px] min-h-[120px] rounded-[10px] hover:bg-white hover:transition-all`}
        >
          <img
            src={client.logo}
            alt="client"
            className="sm:w-[192px] w-[100px] object-contain"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
