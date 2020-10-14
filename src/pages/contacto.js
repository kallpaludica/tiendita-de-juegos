import React from "react"
import Layout from "../components/layout"
import HeroWave from "../components/HeroWave"
import Contact from "../components/About/Contact"
import SEO from "../components/seo"
import { Helmet } from "react-helmet"
import "../components/VideoReact.css"
import "../components/AwsBtn.css"
//import tw from "twin.macro"
//import styled from "@emotion/styled"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "react-tabs/style/react-tabs.css"

const ContactPage = () => {
  return (
    <Layout>
      <Helmet>
        <body className="home" />
      </Helmet>
      <SEO title="Inicio" />
      <HeroWave
        pattern="bg-green-700 text-green-900"
        svg="M0,256L80,261.3C160,267,320,277,480,272C640,267,800,245,960,229.3C1120,213,1280,203,1360,197.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      />
      <Contact />
      <Tabs forceRenderTabPanel defaultIndex={1}>
        <TabList>
          <Tab>The Simpsons</Tab>
          <Tab>Futurama</Tab>
        </TabList>
        <TabPanel>
          <Tabs forceRenderTabPanel>
            <TabList>
              <Tab>Homer Simpson</Tab>
              <Tab>Marge Simpson</Tab>
              <Tab>Bart Simpson</Tab>
              <Tab>Lisa Simpson</Tab>
              <Tab>Maggie Simpson</Tab>
            </TabList>
            <TabPanel>
              <p>Husband of Marge; father of Bart, Lisa, and Maggie.</p>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Homer_Simpson_2006.png/212px-Homer_Simpson_2006.png"
                alt="Homer Simpson"
              />
            </TabPanel>
            <TabPanel>
              <p>Wife of Homer; mother of Bart, Lisa, and Maggie.</p>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Marge_Simpson.png/220px-Marge_Simpson.png"
                alt="Marge Simpson"
              />
            </TabPanel>
            <TabPanel>
              <p>
                Oldest child and only son of Homer and Marge; brother of Lisa
                and Maggie.
              </p>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png"
                alt="Bart Simpson"
              />
            </TabPanel>
            <TabPanel>
              <p>
                Middle child and eldest daughter of Homer and Marge; sister of
                Bart and Maggie.
              </p>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/Lisa_Simpson.png/200px-Lisa_Simpson.png"
                alt="Lisa Simpson"
              />
            </TabPanel>
            <TabPanel>
              <p>
                Youngest child and daughter of Homer and Marge; sister of Bart
                and Lisa.
              </p>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Maggie_Simpson.png/223px-Maggie_Simpson.png"
                alt="Maggie Simpson"
              />
            </TabPanel>
          </Tabs>
        </TabPanel>
        <TabPanel>
          <Tabs forceRenderTabPanel>
            <TabList>
              <Tab>Philip J. Fry</Tab>
              <Tab>Turanga Leela</Tab>
              <Tab>Bender Bending Rodriguez</Tab>
              <Tab>Amy Wong</Tab>
              <Tab>Professor Hubert J. Farnsworth</Tab>
              <Tab>Doctor John Zoidberg</Tab>
            </TabList>
            <TabPanel>
              <p>
                Protagonist, from the 20th Century. Delivery boy. Many times
                great-uncle to Professor Hubert Farnsworth. Suitor of Leela.
              </p>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Philip_Fry.png/175px-Philip_Fry.png"
                alt="Philip J. Fry"
              />
            </TabPanel>
            <TabPanel>
              <p>
                Mutant cyclops. Captain of the Planet Express Ship. Love
                interest of Fry.
              </p>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Turanga_Leela.png/150px-Turanga_Leela.png"
                alt="Turanga Leela"
              />
            </TabPanel>
            <TabPanel>
              <p>
                A kleptomaniacal, lazy, cigar-smoking, heavy-drinking robot who
                is Fry's best friend. Built in Tijuana, Mexico, he is the Planet
                Express Ship's cook.
              </p>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Bender_Rodriguez.png/220px-Bender_Rodriguez.png"
                alt="Bender Bending Rodriguez"
              />
            </TabPanel>
            <TabPanel>
              <p>
                Chinese-Martian intern at Planet Express. Fonfon Ru of Kif
                Kroker.
              </p>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/FuturamaAmyWong.png/140px-FuturamaAmyWong.png"
                alt="Amy Wong"
              />
            </TabPanel>
            <TabPanel>
              <p>
                Many times great-nephew of Fry. CEO and owner of Planet Express
                delivery company. Tenured professor of Mars University.
              </p>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0f/FuturamaProfessorFarnsworth.png/175px-FuturamaProfessorFarnsworth.png"
                alt="Professor Hubert J. Farnsworth"
              />
            </TabPanel>
            <TabPanel>
              <p>
                Alien from Decapod 10. Planet Express' staff doctor and steward.
                Has a medical degree and Ph.D in art history.
              </p>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Dr_John_Zoidberg.png/200px-Dr_John_Zoidberg.png"
                alt="Doctor John Zoidberg"
              />
            </TabPanel>
          </Tabs>
        </TabPanel>
      </Tabs>
    </Layout>
  )
}

export default ContactPage
