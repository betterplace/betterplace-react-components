import React from 'react'
import ReactDOM from 'react-dom'
import { ProjectTeaser } from './components/project_teaser'

const project = {
  "id": 1114,
  "created_at": "2009-03-10T11:12:16+01:00",
  "updated_at": "2019-03-05T10:30:09+01:00",
  "latitude": 34.5553494,
  "longitude": 69.207486,
  "street": "Daimlerstraße 191",
  "zip": "",
  "city": "Afghanistan, Cambodia",
  "country": "Südafrika",
  "content_updated_at": "2018-11-28T11:43:35+01:00",
  "activated_at": "2009-03-10T00:00:00+01:00",
  "title": "Unterstütze Skateistan - Sport &amp; Bildung für Kinder",
  "description": "<div> </div><div>Skateistan ist eine prämierte internationale gemeinnützige Organisation mit Sitz in Berlin. <strong>Unser Ziel ist es, Kinder in Afghanistan, Kambodscha und Südafrika mit Hilfe von Skateboarding und damit verbundenen Bildungsprogrammen zu stärken. </strong>\n</div><div><br></div><div>Diese neuartigen Programme bilden unsere Schüler nicht nur zu zukünftigen Skatern aus, sondern vor allem zu Führern und Vorbildern einer besseren Welt, in der jeder integriert wird. Aus diesem Grunde...",
  "summary": "Skateistan will Kindern in Afghanistan, Kambodsha und Sudafrika neue Perspektiven eröffnen, Vorurteile abbauen, Gleichberechtigung fördern und Freude bringen.",
  "tax_deductible": true,
  "donations_prohibited": false,
  "completed_at": null,
  "closed_at": null,
  "open_amount_in_cents": 817420,
  "donated_amount_in_cents": 6407432,
  "positive_opinions_count": 865,
  "negative_opinions_count": 0,
  "donations_count": 865,
  "newsletter_subscriptions_count": 327,
  "comments_count": 0,
  "donor_count": 635,
  "progress_percentage": 88,
  "incomplete_need_count": 2,
  "completed_need_count": 96,
  "blog_post_count": 92,
  "links": [{
    "rel":	"platform",
    "href":	"https://www.betterplace.org/de/projects/1114-unterstutze-skateistan-sport-bildung-fur-kinder"
  }],
  "profile_picture": {
    "links": [{
      "rel": "fill_410x214",
      "href": "https://betterplace-assets.betterplace.org/uploads/project/profile_picture/000/001/114/fill_410x214_bp1541167187_Skateistan_Press_Image_Mazar7_2018_credit_Andy_Buchanan_for_Skateistan.JPG"
    }]
  },
  "carrier": {
    "picture": {
      "links": [{
        "rel":	"fill_100x100",
        "href":	"https://betterplace-assets.betterplace.org/uploads/organisation/profile_picture/000/001/054/fill_100x100_bp1523439289_Skateistan_facebook-01.png"
      }]
    }
  }

}

ReactDOM.render(<ProjectTeaser project={project}
  showDescription={true}
  progressbarColor='#9ECB0A'
  textColor='#000000' />, document.getElementById('app'))
