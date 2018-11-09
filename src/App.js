import React, { Component } from 'react';
import { ResponsiveWaffleHtml } from '@nivo/waffle'
import { ResponsiveCalendar } from '@nivo/calendar'
import './App.css';

import BasicPopup from './BasicPopup';
import SocialLinks from './SocialLinks';

class App extends Component {
  state = true;
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            React FE Templ8
          </h1>
          <div className="row">
            <div className="col">
              <img
                src="images/bizcard.png"
                className="img-fluid"
                alt="my business card"
               /><br/>
               <h5>
                By Alexander Jacks
               </h5>
            </div>
            <div className="d-flex justify-content-around flex-column col-md-6">
              <div className="mx-auto">
                <BasicPopup
                  btnText="Companies I've worked with"
                  title="Proud to consult with..."
                  text="Minority Veterans of America, Blackwood Housekeeping, JENIE.com, Veteran Mentor Network, Sitecast.com"
                  confirmButtonText="Outsanding!"
                />
                <BasicPopup
                  btnText="About this FE Templ8"
                  btnColor="orange"
                  title="Front-end Development Kit"
                  text="Styling library MDBootstrap included. Some Nivo modules showcased. FontAwesome5 CDN set up. SweetAlert components ready to use."
                  confirmButtonText="Way to Be! ✌️"
                />
                <BasicPopup
                  btnText="More about Alex"
                  btnColor="light"
                  title="My Journey in Tech, in Brief"
                  text="I built my first website in 1997, and figured out how to host it on the local ISP after I read enough BBS posts about <strong><em>FTP</em></strong> clients. I decided I wanted to do this professionally, so a few years later I enrolled in a Web Programming school in NYC and learned industry best-practices and even built my own <strong><em>GUI</em></strong> in <strong><em>Java</em></strong>! Then 9/11 went down, and I was traumatised and angry enough to join the US Air Force, where I began an intense 5-year career as a <strong><em>data and voice network sysadmin</em></strong>. Years later I used the 9/11 GI Bill to complete a Psychology degree, but I still missed working with technology and designing user experiences. <p>So in 2017 I finished a code school in Portland, Oregon and learned how to work with current JS frameworks like <strong><em>React</em></strong>, <strong><em>Vue</em></strong>, <strong><em>Angular</em></strong>, (even <strong><em>Ember</em></strong>, in theory!) and how to leverage tools like <strong><em>Github</em></strong>, <strong><em>Bootstrap</em></strong>, <strong><em>Sass</em></strong>, <strong><em>FontAwesome</em></strong>, and more. I've been consulting as a web developer since 2015 (before code school, even) and am searching for a full time role in the Portland, Oregon area so I can supercharge my front-end learnings with some mentorship and <strong><em>Agile dev</em></strong>. Right now I'm volunteering with Code4PDX which is tuning me in to team development practices, and I'm also volunteering to build a site for Minority Veterans of America, which is helping me learn the <strong><em>Agile</em></strong> methodology and become comfy doing code reviews and PRs on <strong><em>Github</em></strong>. Thanks for reading all of this!</p>"
                  confirmButtonText="Right on! 🙏"
                />
              </div>
            </div>
          </div>
        </header>
        <div className="nivochart">
        <ResponsiveWaffleHtml
          data={[
            {
              "id": "ones",
              "label": "ones",
              "value": 41.2424,
              "color": "ones"
            },
            {
              "id": "twos",
              "label": "twos",
              "value": 32.33323,
              "color": "twos"
            },
            {
              "id": "tres",
              "label": "tres",
              "value": 23.0032,
              "color": "tres"
            }
          ]}
          total={100}
          rows={18}
          columns={14}
          margin={{
              "top": 10,
              "right": 10,
              "bottom": 10,
              "left": 10
          }}
          colors="purple_orange"
          colorBy="id"
          borderColor="inherit:darker(0.8)"
          animate={true}
          motionStiffness={90}
          motionDamping={11}
        />
        </div>
        <h6>Nivo Waffle
        </h6>

        <div className="nivocalendar">
          <ResponsiveCalendar
            data={[
  {
    "day": "2015-12-10",
    "value": 137
  },
  {
    "day": "2015-08-30",
    "value": 390
  },
  {
    "day": "2015-04-12",
    "value": 385
  },
  {
    "day": "2015-05-20",
    "value": 140
  },
  {
    "day": "2016-04-19",
    "value": 202
  },
  {
    "day": "2015-11-01",
    "value": 25
  },
  {
    "day": "2015-05-22",
    "value": 21
  },
  {
    "day": "2016-08-03",
    "value": 214
  },
  {
    "day": "2016-03-28",
    "value": 103
  },
  {
    "day": "2016-01-29",
    "value": 89
  },
  {
    "day": "2015-04-14",
    "value": 185
  },
  {
    "day": "2016-01-07",
    "value": 318
  },
  {
    "day": "2016-03-13",
    "value": 198
  },
  {
    "day": "2016-06-12",
    "value": 36
  },
  {
    "day": "2015-09-26",
    "value": 290
  },
  {
    "day": "2016-06-07",
    "value": 74
  },
  {
    "day": "2016-01-20",
    "value": 331
  },
  {
    "day": "2015-10-20",
    "value": 198
  },
  {
    "day": "2015-09-15",
    "value": 42
  },
  {
    "day": "2015-07-12",
    "value": 239
  },
  {
    "day": "2015-10-09",
    "value": 328
  },
  {
    "day": "2016-04-03",
    "value": 209
  },
  {
    "day": "2016-01-19",
    "value": 356
  },
  {
    "day": "2015-05-29",
    "value": 154
  },
  {
    "day": "2015-11-11",
    "value": 376
  },
  {
    "day": "2016-03-11",
    "value": 200
  },
  {
    "day": "2016-07-06",
    "value": 16
  },
  {
    "day": "2015-10-11",
    "value": 58
  },
  {
    "day": "2015-05-31",
    "value": 205
  },
  {
    "day": "2015-08-23",
    "value": 231
  },
  {
    "day": "2015-08-06",
    "value": 80
  },
  {
    "day": "2016-08-11",
    "value": 69
  },
  {
    "day": "2015-05-26",
    "value": 258
  },
  {
    "day": "2015-07-05",
    "value": 141
  },
  {
    "day": "2015-07-23",
    "value": 236
  },
  {
    "day": "2016-05-23",
    "value": 84
  },
  {
    "day": "2015-12-06",
    "value": 386
  },
  {
    "day": "2016-05-31",
    "value": 313
  },
  {
    "day": "2016-03-02",
    "value": 372
  },
  {
    "day": "2016-08-09",
    "value": 189
  },
  {
    "day": "2016-02-14",
    "value": 375
  },
  {
    "day": "2015-06-05",
    "value": 2
  },
  {
    "day": "2015-04-07",
    "value": 302
  },
  {
    "day": "2016-03-17",
    "value": 285
  },
  {
    "day": "2015-05-25",
    "value": 303
  },
  {
    "day": "2015-11-10",
    "value": 84
  },
  {
    "day": "2016-02-12",
    "value": 100
  },
  {
    "day": "2015-12-30",
    "value": 336
  },
  {
    "day": "2016-01-05",
    "value": 191
  },
  {
    "day": "2016-03-14",
    "value": 251
  },
  {
    "day": "2015-05-17",
    "value": 104
  },
  {
    "day": "2016-07-05",
    "value": 83
  },
  {
    "day": "2016-02-17",
    "value": 135
  },
  {
    "day": "2016-01-01",
    "value": 198
  },
  {
    "day": "2015-06-24",
    "value": 265
  },
  {
    "day": "2015-09-27",
    "value": 197
  },
  {
    "day": "2015-05-10",
    "value": 376
  },
  {
    "day": "2015-06-09",
    "value": 386
  },
  {
    "day": "2016-05-25",
    "value": 46
  },
  {
    "day": "2015-06-21",
    "value": 253
  },
  {
    "day": "2016-01-09",
    "value": 200
  },
  {
    "day": "2015-11-13",
    "value": 256
  },
  {
    "day": "2015-11-22",
    "value": 41
  },
  {
    "day": "2015-07-09",
    "value": 231
  },
  {
    "day": "2016-01-26",
    "value": 259
  },
  {
    "day": "2015-10-05",
    "value": 325
  },
  {
    "day": "2016-03-06",
    "value": 251
  },
  {
    "day": "2015-06-11",
    "value": 392
  },
  {
    "day": "2015-09-07",
    "value": 272
  },
  {
    "day": "2015-10-25",
    "value": 30
  },
  {
    "day": "2015-12-09",
    "value": 216
  },
  {
    "day": "2015-12-15",
    "value": 13
  },
  {
    "day": "2015-12-13",
    "value": 386
  },
  {
    "day": "2016-05-02",
    "value": 235
  },
  {
    "day": "2016-07-14",
    "value": 65
  },
  {
    "day": "2016-05-08",
    "value": 32
  },
  {
    "day": "2016-04-25",
    "value": 170
  },
  {
    "day": "2016-06-18",
    "value": 206
  },
  {
    "day": "2015-06-15",
    "value": 171
  },
  {
    "day": "2015-11-24",
    "value": 299
  },
  {
    "day": "2016-02-24",
    "value": 353
  },
  {
    "day": "2015-07-20",
    "value": 28
  },
  {
    "day": "2015-09-01",
    "value": 377
  },
  {
    "day": "2016-02-04",
    "value": 259
  },
  {
    "day": "2015-12-21",
    "value": 186
  },
  {
    "day": "2016-04-13",
    "value": 388
  },
  {
    "day": "2016-02-21",
    "value": 149
  },
  {
    "day": "2016-06-30",
    "value": 153
  },
  {
    "day": "2016-02-03",
    "value": 22
  },
  {
    "day": "2016-06-27",
    "value": 376
  },
  {
    "day": "2015-09-20",
    "value": 66
  },
  {
    "day": "2016-01-17",
    "value": 340
  },
  {
    "day": "2015-08-16",
    "value": 267
  },
  {
    "day": "2016-03-19",
    "value": 138
  },
  {
    "day": "2015-10-30",
    "value": 139
  },
  {
    "day": "2016-05-26",
    "value": 101
  },
  {
    "day": "2016-08-07",
    "value": 388
  },
  {
    "day": "2016-06-26",
    "value": 279
  },
  {
    "day": "2016-05-18",
    "value": 182
  },
  {
    "day": "2016-05-22",
    "value": 168
  },
  {
    "day": "2016-06-08",
    "value": 322
  },
  {
    "day": "2016-06-06",
    "value": 354
  },
  {
    "day": "2015-04-05",
    "value": 398
  },
  {
    "day": "2015-12-01",
    "value": 398
  },
  {
    "day": "2016-04-14",
    "value": 69
  },
  {
    "day": "2016-01-16",
    "value": 96
  },
  {
    "day": "2015-04-09",
    "value": 385
  },
  {
    "day": "2015-11-16",
    "value": 109
  },
  {
    "day": "2015-12-31",
    "value": 373
  },
  {
    "day": "2016-07-13",
    "value": 209
  },
  {
    "day": "2016-06-24",
    "value": 237
  },
  {
    "day": "2015-07-14",
    "value": 191
  },
  {
    "day": "2015-06-13",
    "value": 380
  },
  {
    "day": "2016-01-30",
    "value": 291
  },
  {
    "day": "2016-05-05",
    "value": 278
  },
  {
    "day": "2016-01-22",
    "value": 399
  },
  {
    "day": "2015-12-14",
    "value": 186
  },
  {
    "day": "2015-11-09",
    "value": 81
  },
  {
    "day": "2015-04-19",
    "value": 36
  },
  {
    "day": "2015-04-28",
    "value": 44
  },
  {
    "day": "2016-03-05",
    "value": 346
  },
  {
    "day": "2016-06-03",
    "value": 177
  },
  {
    "day": "2015-09-09",
    "value": 62
  },
  {
    "day": "2016-06-01",
    "value": 28
  },
  {
    "day": "2016-06-21",
    "value": 233
  },
  {
    "day": "2015-06-28",
    "value": 345
  },
  {
    "day": "2016-06-28",
    "value": 178
  },
  {
    "day": "2015-11-26",
    "value": 9
  },
  {
    "day": "2016-03-26",
    "value": 308
  },
  {
    "day": "2015-08-21",
    "value": 303
  },
  {
    "day": "2016-01-04",
    "value": 355
  },
  {
    "day": "2016-07-01",
    "value": 377
  },
  {
    "day": "2016-06-20",
    "value": 336
  },
  {
    "day": "2015-12-16",
    "value": 131
  },
  {
    "day": "2015-10-02",
    "value": 229
  },
  {
    "day": "2016-06-14",
    "value": 147
  },
  {
    "day": "2015-05-07",
    "value": 46
  },
  {
    "day": "2016-07-29",
    "value": 55
  },
  {
    "day": "2015-08-17",
    "value": 327
  },
  {
    "day": "2015-12-25",
    "value": 57
  },
  {
    "day": "2016-04-04",
    "value": 104
  },
  {
    "day": "2015-12-28",
    "value": 243
  },
  {
    "day": "2015-11-17",
    "value": 235
  },
  {
    "day": "2016-03-20",
    "value": 372
  },
  {
    "day": "2015-11-08",
    "value": 330
  },
  {
    "day": "2015-09-22",
    "value": 19
  },
  {
    "day": "2016-02-27",
    "value": 139
  },
  {
    "day": "2016-07-07",
    "value": 66
  },
  {
    "day": "2015-11-06",
    "value": 105
  },
  {
    "day": "2016-06-09",
    "value": 373
  },
  {
    "day": "2016-03-16",
    "value": 200
  },
  {
    "day": "2015-07-17",
    "value": 101
  },
  {
    "day": "2015-07-11",
    "value": 137
  },
  {
    "day": "2015-11-28",
    "value": 138
  },
  {
    "day": "2015-07-22",
    "value": 215
  },
  {
    "day": "2015-09-17",
    "value": 346
  },
  {
    "day": "2015-12-27",
    "value": 128
  },
  {
    "day": "2016-04-24",
    "value": 82
  },
  {
    "day": "2015-08-03",
    "value": 66
  },
  {
    "day": "2016-02-09",
    "value": 310
  },
  {
    "day": "2015-09-05",
    "value": 287
  },
  {
    "day": "2016-02-26",
    "value": 26
  },
  {
    "day": "2016-02-28",
    "value": 381
  },
  {
    "day": "2016-02-15",
    "value": 165
  },
  {
    "day": "2015-10-28",
    "value": 83
  },
  {
    "day": "2015-07-07",
    "value": 305
  },
  {
    "day": "2015-11-15",
    "value": 10
  },
  {
    "day": "2015-06-20",
    "value": 154
  },
  {
    "day": "2015-08-07",
    "value": 248
  },
  {
    "day": "2016-02-19",
    "value": 279
  },
  {
    "day": "2016-05-20",
    "value": 366
  },
  {
    "day": "2016-04-15",
    "value": 313
  },
  {
    "day": "2016-05-29",
    "value": 241
  },
  {
    "day": "2015-06-22",
    "value": 88
  },
  {
    "day": "2015-05-03",
    "value": 398
  },
  {
    "day": "2015-10-29",
    "value": 63
  },
  {
    "day": "2015-06-16",
    "value": 167
  },
  {
    "day": "2016-05-14",
    "value": 33
  },
  {
    "day": "2016-07-26",
    "value": 384
  },
  {
    "day": "2016-03-18",
    "value": 354
  },
  {
    "day": "2016-05-21",
    "value": 239
  },
  {
    "day": "2016-07-12",
    "value": 68
  },
  {
    "day": "2016-04-09",
    "value": 62
  },
  {
    "day": "2016-06-16",
    "value": 11
  },
  {
    "day": "2015-08-28",
    "value": 81
  },
  {
    "day": "2016-03-10",
    "value": 396
  },
  {
    "day": "2016-01-10",
    "value": 326
  },
  {
    "day": "2016-01-08",
    "value": 323
  },
  {
    "day": "2015-04-13",
    "value": 45
  },
  {
    "day": "2015-07-18",
    "value": 168
  },
  {
    "day": "2016-05-01",
    "value": 169
  },
  {
    "day": "2016-04-23",
    "value": 147
  },
  {
    "day": "2015-04-02",
    "value": 39
  },
  {
    "day": "2015-09-19",
    "value": 73
  },
  {
    "day": "2016-05-17",
    "value": 94
  },
  {
    "day": "2016-02-08",
    "value": 271
  },
  {
    "day": "2015-06-26",
    "value": 364
  },
  {
    "day": "2016-06-05",
    "value": 262
  },
  {
    "day": "2015-04-08",
    "value": 378
  },
  {
    "day": "2016-07-24",
    "value": 362
  },
  {
    "day": "2016-06-25",
    "value": 323
  },
  {
    "day": "2015-05-09",
    "value": 314
  },
  {
    "day": "2015-09-25",
    "value": 38
  },
  {
    "day": "2015-12-11",
    "value": 262
  },
  {
    "day": "2015-04-04",
    "value": 334
  },
  {
    "day": "2016-01-28",
    "value": 332
  },
  {
    "day": "2016-03-01",
    "value": 76
  },
  {
    "day": "2016-03-27",
    "value": 302
  },
  {
    "day": "2015-11-04",
    "value": 175
  },
  {
    "day": "2016-03-22",
    "value": 83
  },
  {
    "day": "2016-07-16",
    "value": 193
  },
  {
    "day": "2015-07-03",
    "value": 185
  },
  {
    "day": "2016-02-02",
    "value": 192
  },
  {
    "day": "2015-09-18",
    "value": 24
  },
  {
    "day": "2016-02-22",
    "value": 210
  },
  {
    "day": "2016-04-01",
    "value": 120
  },
  {
    "day": "2016-04-16",
    "value": 235
  },
  {
    "day": "2015-10-08",
    "value": 3
  },
  {
    "day": "2015-12-29",
    "value": 399
  },
  {
    "day": "2015-08-15",
    "value": 259
  },
  {
    "day": "2016-03-23",
    "value": 205
  },
  {
    "day": "2016-07-21",
    "value": 290
  },
  {
    "day": "2016-05-13",
    "value": 343
  },
  {
    "day": "2015-05-21",
    "value": 269
  },
  {
    "day": "2015-05-16",
    "value": 243
  },
  {
    "day": "2015-04-17",
    "value": 169
  },
  {
    "day": "2015-08-19",
    "value": 218
  },
  {
    "day": "2015-09-13",
    "value": 43
  },
  {
    "day": "2015-12-03",
    "value": 112
  },
  {
    "day": "2015-09-10",
    "value": 1
  },
  {
    "day": "2015-05-08",
    "value": 95
  },
  {
    "day": "2015-04-29",
    "value": 6
  },
  {
    "day": "2016-08-10",
    "value": 99
  },
  {
    "day": "2015-11-20",
    "value": 92
  },
  {
    "day": "2016-07-28",
    "value": 355
  },
  {
    "day": "2015-07-06",
    "value": 264
  },
  {
    "day": "2015-08-27",
    "value": 273
  },
  {
    "day": "2015-12-22",
    "value": 261
  },
  {
    "day": "2016-03-15",
    "value": 72
  },
  {
    "day": "2016-03-09",
    "value": 197
  },
  {
    "day": "2015-12-24",
    "value": 358
  },
  {
    "day": "2015-11-02",
    "value": 146
  },
  {
    "day": "2016-06-29",
    "value": 38
  },
  {
    "day": "2015-05-06",
    "value": 311
  },
  {
    "day": "2015-08-09",
    "value": 213
  },
  {
    "day": "2015-05-05",
    "value": 245
  },
  {
    "day": "2015-06-17",
    "value": 276
  },
  {
    "day": "2016-06-10",
    "value": 260
  },
  {
    "day": "2015-12-18",
    "value": 30
  },
  {
    "day": "2016-02-23",
    "value": 68
  },
  {
    "day": "2015-04-24",
    "value": 217
  },
  {
    "day": "2015-04-26",
    "value": 387
  },
  {
    "day": "2015-08-24",
    "value": 166
  },
  {
    "day": "2016-01-27",
    "value": 15
  },
  {
    "day": "2015-10-18",
    "value": 184
  },
  {
    "day": "2015-11-12",
    "value": 374
  },
  {
    "day": "2016-05-07",
    "value": 171
  },
  {
    "day": "2015-11-19",
    "value": 247
  },
  {
    "day": "2016-07-04",
    "value": 96
  },
  {
    "day": "2016-05-24",
    "value": 387
  },
  {
    "day": "2016-07-03",
    "value": 371
  },
  {
    "day": "2015-05-11",
    "value": 200
  },
  {
    "day": "2015-08-26",
    "value": 329
  },
  {
    "day": "2015-07-01",
    "value": 164
  },
  {
    "day": "2015-10-14",
    "value": 365
  },
  {
    "day": "2016-04-07",
    "value": 366
  },
  {
    "day": "2015-09-23",
    "value": 217
  },
  {
    "day": "2015-10-13",
    "value": 85
  },
  {
    "day": "2015-12-23",
    "value": 156
  },
  {
    "day": "2015-10-19",
    "value": 138
  },
  {
    "day": "2015-04-10",
    "value": 303
  },
  {
    "day": "2015-12-05",
    "value": 145
  },
  {
    "day": "2015-07-13",
    "value": 202
  },
  {
    "day": "2016-01-25",
    "value": 38
  },
  {
    "day": "2015-06-29",
    "value": 347
  },
  {
    "day": "2016-03-04",
    "value": 339
  },
  {
    "day": "2015-12-04",
    "value": 52
  },
  {
    "day": "2016-01-12",
    "value": 331
  },
  {
    "day": "2015-06-25",
    "value": 67
  },
  {
    "day": "2016-08-08",
    "value": 144
  },
  {
    "day": "2016-03-24",
    "value": 290
  },
  {
    "day": "2016-02-16",
    "value": 298
  },
  {
    "day": "2015-04-23",
    "value": 4
  },
  {
    "day": "2016-04-17",
    "value": 185
  },
  {
    "day": "2016-06-22",
    "value": 273
  },
  {
    "day": "2015-08-04",
    "value": 266
  },
  {
    "day": "2015-08-20",
    "value": 155
  },
  {
    "day": "2015-05-28",
    "value": 182
  },
  {
    "day": "2015-04-16",
    "value": 79
  },
  {
    "day": "2015-07-29",
    "value": 306
  },
  {
    "day": "2015-10-21",
    "value": 12
  },
  {
    "day": "2016-07-10",
    "value": 75
  },
  {
    "day": "2015-12-20",
    "value": 76
  },
  {
    "day": "2016-01-31",
    "value": 125
  },
  {
    "day": "2015-06-01",
    "value": 111
  },
  {
    "day": "2015-05-12",
    "value": 370
  },
  {
    "day": "2015-07-24",
    "value": 48
  },
  {
    "day": "2015-06-02",
    "value": 255
  },
  {
    "day": "2016-01-02",
    "value": 273
  },
  {
    "day": "2015-10-17",
    "value": 330
  },
  {
    "day": "2016-07-31",
    "value": 3
  },
  {
    "day": "2015-07-27",
    "value": 13
  },
  {
    "day": "2016-04-10",
    "value": 258
  },
  {
    "day": "2015-08-14",
    "value": 212
  },
  {
    "day": "2015-09-24",
    "value": 390
  },
  {
    "day": "2016-07-20",
    "value": 101
  },
  {
    "day": "2015-09-14",
    "value": 40
  },
  {
    "day": "2015-11-05",
    "value": 230
  },
  {
    "day": "2015-10-16",
    "value": 143
  },
  {
    "day": "2015-10-12",
    "value": 173
  },
  {
    "day": "2015-04-01",
    "value": 140
  },
  {
    "day": "2015-10-27",
    "value": 7
  },
  {
    "day": "2016-04-20",
    "value": 15
  },
  {
    "day": "2015-12-17",
    "value": 369
  },
  {
    "day": "2016-03-03",
    "value": 240
  },
  {
    "day": "2016-05-09",
    "value": 137
  },
  {
    "day": "2016-07-02",
    "value": 219
  },
  {
    "day": "2016-01-23",
    "value": 180
  },
  {
    "day": "2015-05-30",
    "value": 62
  },
  {
    "day": "2015-09-02",
    "value": 260
  },
  {
    "day": "2016-02-20",
    "value": 387
  },
  {
    "day": "2015-10-15",
    "value": 227
  },
  {
    "day": "2016-04-29",
    "value": 72
  },
  {
    "day": "2016-01-13",
    "value": 258
  },
  {
    "day": "2015-04-25",
    "value": 294
  },
  {
    "day": "2016-05-19",
    "value": 226
  },
  {
    "day": "2015-04-03",
    "value": 322
  },
  {
    "day": "2015-10-07",
    "value": 386
  },
  {
    "day": "2015-09-29",
    "value": 98
  },
  {
    "day": "2015-11-14",
    "value": 271
  },
  {
    "day": "2016-05-30",
    "value": 290
  },
  {
    "day": "2016-06-11",
    "value": 307
  },
  {
    "day": "2016-01-06",
    "value": 343
  },
  {
    "day": "2015-06-03",
    "value": 150
  },
  {
    "day": "2015-07-28",
    "value": 104
  },
  {
    "day": "2016-05-12",
    "value": 154
  },
  {
    "day": "2016-01-21",
    "value": 201
  },
  {
    "day": "2016-02-05",
    "value": 243
  },
  {
    "day": "2015-04-06",
    "value": 251
  },
  {
    "day": "2015-11-18",
    "value": 75
  },
  {
    "day": "2016-05-06",
    "value": 267
  },
  {
    "day": "2016-05-27",
    "value": 8
  },
  {
    "day": "2015-09-06",
    "value": 59
  },
  {
    "day": "2015-06-12",
    "value": 242
  },
  {
    "day": "2015-08-01",
    "value": 254
  },
  {
    "day": "2016-05-15",
    "value": 85
  },
  {
    "day": "2015-04-30",
    "value": 225
  },
  {
    "day": "2016-02-29",
    "value": 32
  },
  {
    "day": "2016-04-08",
    "value": 213
  },
  {
    "day": "2016-07-30",
    "value": 162
  },
  {
    "day": "2015-07-10",
    "value": 87
  },
  {
    "day": "2015-08-13",
    "value": 158
  },
  {
    "day": "2015-06-07",
    "value": 193
  },
  {
    "day": "2015-08-05",
    "value": 68
  },
  {
    "day": "2016-04-12",
    "value": 66
  },
  {
    "day": "2016-05-11",
    "value": 38
  },
  {
    "day": "2016-03-29",
    "value": 205
  },
  {
    "day": "2016-06-15",
    "value": 173
  },
  {
    "day": "2016-04-30",
    "value": 268
  },
  {
    "day": "2015-05-01",
    "value": 12
  },
  {
    "day": "2015-11-07",
    "value": 287
  },
  {
    "day": "2016-04-26",
    "value": 122
  },
  {
    "day": "2016-04-05",
    "value": 365
  },
  {
    "day": "2015-09-03",
    "value": 248
  },
  {
    "day": "2016-03-07",
    "value": 88
  },
  {
    "day": "2016-07-09",
    "value": 22
  },
  {
    "day": "2015-08-25",
    "value": 52
  },
  {
    "day": "2015-06-08",
    "value": 309
  },
  {
    "day": "2016-04-22",
    "value": 300
  },
  {
    "day": "2016-02-07",
    "value": 316
  },
  {
    "day": "2015-10-06",
    "value": 273
  },
  {
    "day": "2015-05-02",
    "value": 334
  },
  {
    "day": "2015-09-16",
    "value": 231
  },
  {
    "day": "2016-08-02",
    "value": 55
  },
  {
    "day": "2015-06-04",
    "value": 288
  },
  {
    "day": "2015-07-16",
    "value": 189
  },
  {
    "day": "2015-12-02",
    "value": 271
  },
  {
    "day": "2015-10-10",
    "value": 220
  },
  {
    "day": "2015-08-18",
    "value": 171
  },
  {
    "day": "2015-06-10",
    "value": 187
  },
  {
    "day": "2015-08-12",
    "value": 275
  },
  {
    "day": "2016-06-02",
    "value": 236
  },
  {
    "day": "2016-07-08",
    "value": 110
  },
  {
    "day": "2015-11-29",
    "value": 351
  },
  {
    "day": "2016-08-01",
    "value": 67
  },
  {
    "day": "2016-03-30",
    "value": 139
  },
  {
    "day": "2016-04-27",
    "value": 72
  },
  {
    "day": "2015-12-08",
    "value": 42
  },
  {
    "day": "2015-04-20",
    "value": 141
  },
  {
    "day": "2015-12-26",
    "value": 397
  },
  {
    "day": "2015-07-25",
    "value": 3
  },
  {
    "day": "2015-05-18",
    "value": 80
  },
  {
    "day": "2015-07-30",
    "value": 246
  },
  {
    "day": "2015-05-23",
    "value": 398
  },
  {
    "day": "2016-04-06",
    "value": 330
  },
  {
    "day": "2016-03-12",
    "value": 168
  },
  {
    "day": "2015-04-18",
    "value": 44
  },
  {
    "day": "2015-12-12",
    "value": 125
  },
  {
    "day": "2015-11-27",
    "value": 108
  },
  {
    "day": "2015-09-28",
    "value": 194
  }
]}
            from="2015-03-01"
            to="2016-07-12"
            emptyColor="#eeeeee"
            colors={[
                "thistle",
                "mediumpurple",
                "indigo"
            ]}
            margin={{
                "top": 100,
                "right": 30,
                "bottom": 60,
                "left": 30
            }}
            yearSpacing={40}
            monthBorderColor="#ffffff"
            monthLegendOffset={10}
            dayBorderWidth={2}
            dayBorderColor="#ffffff"
            legends={[
                {
                    "anchor": "bottom-right",
                    "direction": "row",
                    "translateY": 36,
                    "itemCount": 4,
                    "itemWidth": 34,
                    "itemHeight": 36,
                    "itemDirection": "top-to-bottom"
                }
            ]}
          />
        </div>
        <h4>Nivo Calendar
        </h4>

        <footer className="important my-3">
          <SocialLinks />
          <p className="text-white">Copyright Alexander Jacks, 2018. MIT License!
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
