import React, {Component} from "react";
import {Link} from 'react-router-dom';
class MechanicsApp extends React.Component {
    render() {
        return(
            <div>
                <div className="container">
                    <br/>
                    <br/>
                    <br/>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item"><a href="#/projects">Projects</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Mechanics App Project</li>
                        </ol>
                    </nav>

                    <h1><a className="text-center" id="Mechanics_App_0"></a>Mechanics App</h1>

                    <br/>
                    <p>This is the source code of an App i developed for the App Store back in 2018,
                        The app was uploaded for 4 months and gained 100+ downloads. This was the first
                        iOS app I developed and the source code is a bit all over the place. Regardless here it is:</p>

                    <h2>
                        Content
                    </h2>
                    <ul>
                        <li className="has-line-data" data-line-start="5" data-line-end="6"><Link
                            to="#history">History</Link></li>
                        <li className="has-line-data" data-line-start="6" data-line-end="7"><Link
                            to="#target-demographic">Target Demographic</Link></li>
                        <li className="has-line-data" data-line-start="7" data-line-end="8"><Link
                            to="#analytics">Analytics</Link></li>
                        <li className="has-line-data" data-line-start="8" data-line-end="9"><Link to="#app-structure">App
                            Structure</Link></li>
                        <li className="has-line-data" data-line-start="9" data-line-end="10"><Link
                            to="#preview">Preview</Link></li>
                        <li className="has-line-data" data-line-start="10" data-line-end="11"><Link
                            to="#adjusting-ad-mob">Adjusting Ad Mob</Link></li>
                        <li className="has-line-data" data-line-start="11" data-line-end="12"><Link to="#the-future">The
                            Future</Link></li>
                        <li className="has-line-data" data-line-start="12" data-line-end="14"><Link to="#social-media">Social
                            Media</Link></li>
                    </ul>

                    <h2><a id="history"></a>History</h2>
                    <p>This app was developed during my first term of sixth form, I was bored of the mechanics syllabus
                        and was tired of having to recalculate the suvat formulas. I initially designed the app to
                        calculate suvat formulas but then adjusted it to cover majority of the AS Mechanics syllabus.
                    </p>

                    <h2><a id="target-demographic"></a>Target Demographic</h2>
                    <p>
                        This app is designed for students, in particular the app was designed for students doing the
                        A-Level Maths Syllabus. Although no advertisements were places the App gained traction
                        naturally on the appstore. I didn’t conduct any extra analysis on the users, so the only
                        analytics I recieved were from Apple, and Google (Ad Mob).
                    </p>

                    <h2><a id={"analytics"}></a>Analytics</h2>
                    <p>
                        The app was available on the app store from 12/07/2017 to 01/01/2019, so all of the analytics
                        from apple will be based on this.
                    </p>
                    <img className="w-100"src="https://raw.githubusercontent.com/sp1d5r/Mechanics-App/master/img/stat1.png"alt="Analytic picture 1" />
                    <p>
                        We can see the app had 7,000 impressions, of this the amount of users that clicke on the page
                        totalled to 560. This is about 8% of users that clicked on the app, to improve this value I
                        could’ve redesigned the app icon and made it more intruiging. Of the 560 users that clicked
                        on the app around 120 users actually installed the app, so that is roughly 21% of the users
                        who had clicked on the app page. This is relatively high (given the context) and I’d say was
                        mostly down to the app screenshots which were clear and minimalistic.
                    </p>
                    <p>
                        Although from the same image we can see that on average the app was used 1.8 times a month,
                        this told me the app was not practical and there was not a demand for this app. After this
                        figure remained constant I stopped developing the app and let the year come to an end to
                        evaluate the analytics.
                    </p>
                    <p>
                        One positive from the chart is that the App was robust enough not to crash a single time.
                    </p>

                    <img className="w-100"
                         src="https://raw.githubusercontent.com/sp1d5r/Mechanics-App/master/img/stat2.png"
                         alt="Analytic picture 2" />

                    <br />
                    <br />
                    <p>
                        From the map above we can see how closely we got to our target demographic. As you can see,
                        majority of the users (51) came from the UK, which was the demographic then 21 coming from the
                        United States and the remaining coming from china and other aspects. This was the biggest
                        surprise to me. I expected only students studing the A-Level maths syllabus to download this app.
                    </p>

                    <img className="w-100"
                         src="https://raw.githubusercontent.com/sp1d5r/Mechanics-App/master/img/stat3.png"
                         alt="Analytic picture 3" />

                    <br />
                    <p>
                         This chart shows how users located the app, we can see majority of the users found the app by
                         searching for it, and a few who came from app referal. Which was as expected since i did not
                         conduct any marketing for this app.
                    </p>
                    <img className="w-100"
                         src="https://raw.githubusercontent.com/sp1d5r/Mechanics-App/master/img/stat4.png"
                         alt="Analytic picture 4" />
                    <br />
                    <br />
                    <p>
                        The next chart shows what devices the users used. My initial expectation was the app would be
                        mostly used on IPhones but to my surprise there was a fair amount of IPad users (17%),
                        the app was configured for the IPad, and IPhone X (New resolution releast at the time).
                    </p>

                    <p>
                        The next segment will evaluate the amount of money the app generated. The app made money by
                        publishing ads on its screen. i opted for the banner ad since anything else would cover majority
                        of the screen.
                    </p>
                    <img className="w-100"
                         src="https://raw.githubusercontent.com/sp1d5r/Mechanics-App/master/img/stat5.png"
                         alt="Analytic picture 5" />
                    <br/>
                    <p>
                        This graph is about advertisement match rate and impressions. This doesn’t really mean too much
                        to me since this was a personal project.
                    </p>

                    <h2><a id="app-structure"></a>
                        App Structure
                    </h2>
                    <p>
                        The app had a tree structure, this can be seen quite clearly using XCode. The landing page can
                        be considered the root node, and each section being a branch.
                    </p>

                    <h2><a id={"preview"}></a>Preview</h2>
                    <p>
                        Below are the images of the mechanics app running on an IPhone X
                    </p>
                    <p >
                        <img className="w-25" src="https://raw.githubusercontent.com/sp1d5r/Mechanics-App/master/img/preview1.PNG" alt="preview picture 1" />
                        <img className="w-25" src="https://raw.githubusercontent.com/sp1d5r/Mechanics-App/master/img/preview2.PNG" alt="preview picture 2"/>
                        <img className="w-25" src="https://raw.githubusercontent.com/sp1d5r/Mechanics-App/master/img/preview3.PNG" alt="preview picture 3" />
                        <img className="w-25" src="https://raw.githubusercontent.com/sp1d5r/Mechanics-App/master/img/preview4.PNG" alt="preview picture 4" />
                        <img className="w-25" src="https://raw.githubusercontent.com/sp1d5r/Mechanics-App/master/img/preview5.PNG" alt="preview picture 5" />
                    </p>

                    <h2>
                        Adjusting Ad Mob
                    </h2>
                    <p>
                        To adjust ad mob to generate you money (after seeing the stats i would wonder why you’d want
                        that) you have to change the API keys in the app delegate file.
                    </p>

                    <h2>
                        The Future
                    </h2>

                    <p>
                        Unfortunately there is no future for the mechanics calculator, this was built as a project when I
                        was 16, it was published when i turned 17, and honestly the app is poorly written. If i was to
                        rebuild something like this i’d focus on the market research a lot more and purchase ads to market
                        it better.
                    </p>

                    <h2>
                        Social Media
                    </h2>

                    <p>
                        these are my social media’s, stay tuned because I will publish the source code to the predecesor of the mechanics calculator, the statistics calculator, this app managed to gain over 3000+ app installs.
                    </p>
                    <ul>
                        <li className="has-line-data" data-line-start="73" data-line-end="74"><a
                            href="https://www.linkedin.com/in/elijah-ahmad-658a2b199/">Linkden - Elijah Ahmad</a></li>
                        <li className="has-line-data" data-line-start="74" data-line-end="75"><a
                            href="https://www.facebook.com/elijah.ahmad.71">FaceBook - Elijah Ahmad</a></li>
                        <li className="has-line-data" data-line-start="75" data-line-end="76"><a
                            href="https://www.instagram.com/ElijahAhmad__">Instagram - @ElijahAhmad__</a></li>
                        <li className="has-line-data" data-line-start="76" data-line-end="78"><a
                            href="https://www.snapchat.com/add/elijah.ahmad">Snapchat - @Elijah.Ahmad</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default MechanicsApp;