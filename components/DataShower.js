import Link from "next/link";
import Image from 'next/image';

import styles from "@/styles/DataShower.module.css";

export default function DataShower({ data, href="/" }) {
  return (
    <div className={styles.data_shower}>
      <div className={styles.country_info}>
        <Link href={href}>
          <a className="btn btn-primary">Go Back</a>
        </Link>
        {data.countryInfo && (
          <>
            <div className={styles.country_image_container}>
              <Image
                src={data.countryInfo.flag}
                alt={`${data.country}_image`}
                width={250}
                height={167}
              />
            </div>
            <h1>{data.country}</h1>
          </>
        )}

        <div className={styles.cases}>
          <h1>Total Stats</h1>
          <h3>Total Cases</h3>
          <h4>{data.cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h4>
        </div>
        <div className={styles.cases}>
          <h3>Total Deaths</h3>
          <h4 className="deaths-text">
            {data.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </h4>
        </div>
        <div className={styles.cases}>
          <h3>Total Recovered</h3>
          <h4 className="recovered-text">
            {data.recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </h4>
        </div>
        <div className={styles.cases}>
          <h3>Active Cases</h3>
          <h4>
            {data.active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </h4>
        </div>
        <div className={styles.cases}>
          <h3>Critical Cases</h3>
          <h4 className="deaths-text">
            {data.critical.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </h4>
        </div>
        {data.affectedCountries && (
          <div className={styles.cases}>
            <h3>Affected Countries</h3>
            <h4 className="deaths-text">
              {data.affectedCountries
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </h4>
          </div>
        )}
      </div>

      {/* today stats */}
      <div className={styles.section}>
        <h1>Today's Stats</h1>
        <div className={styles.cases}>
          <h3>Today Cases</h3>
          <h4>
            +{data.todayCases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </h4>
        </div>
        <div className={styles.cases}>
          <h3>Today Deaths</h3>
          <h4 className="deaths-text">
            +{data.todayDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </h4>
        </div>
        <div className={styles.cases}>
          <h3>Today Recovered</h3>
          <h4 className="recovered-text">
            +
            {data.todayRecovered
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </h4>
        </div>
      </div>

      <div className={styles.section}>
        <h1>Per Million Stats</h1>
        <div className={styles.cases}>
          <h3>Cases Per Million</h3>
          <h4>
            {data.casesPerOneMillion
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </h4>
        </div>
        <div className={styles.cases}>
          <h3>Deaths Per Million</h3>
          <h4 className="deaths-text">
            {data.deathsPerOneMillion
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </h4>
        </div>
        <div className={styles.cases}>
          <h3>Active Cases Per Million</h3>
          <h4>
            {data.activePerOneMillion
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </h4>
        </div>
        <div className={styles.cases}>
          <h3>Recovered Per Million</h3>
          <h4 className="recovered-text">
            {data.recoveredPerOneMillion
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </h4>
        </div>
        <div className={styles.cases}>
          <h3>Critical Cases Per Million</h3>
          <h4 className="deaths-text">
            {data.criticalPerOneMillion
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </h4>
        </div>
      </div>

      {/* Tests stats */}
      <div className={styles.section}>
        <h1>Test's Stats</h1>
        <div className={styles.cases}>
          <h3>Total Tests</h3>
          <h4>{data.tests.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h4>
        </div>
        <div className={styles.cases}>
          <h3>Tests Per Million</h3>
          <h4>
            {data.testsPerOneMillion
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </h4>
        </div>
        <div className={styles.cases}>
          <h3>Total Population</h3>
          <h4>
            {data.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </h4>
        </div>
      </div>

      {/* Per People Stats */}
      <div className={styles.section}>
        <h1>Per People Stats</h1>
        <div className={styles.cases}>
          <h3>One Case Per People</h3>
          <h4>
            {data.oneCasePerPeople
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </h4>
        </div>
        <div className={styles.cases}>
          <h3>One Death Per People</h3>
          <h4 className="deaths-text">
            {data.oneDeathPerPeople
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </h4>
        </div>
        <div className={styles.cases}>
          <h3>One Test Per People</h3>
          <h4>
            {data.oneTestPerPeople
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </h4>
        </div>
      </div>
    </div>
  );
}
