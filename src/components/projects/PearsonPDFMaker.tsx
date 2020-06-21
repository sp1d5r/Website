import React, {Component} from "react";

class PearsonPDFMaker extends React.Component {
    render() {
        return(
            <div className={"container"}>
                <br/>
                <br/>
                <br/>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item"><a href="/#/projects">Projects</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Pearson PDF Maker</li>
                    </ol>
                </nav>
                <h1>Pearson PDF Maker</h1>
                <p className="alert-danger">
                    <strong>
                        Haven't updated this project since 2018 so it most likely no longer works...
                    </strong>
                </p>

                <h2>Table of Contents</h2>
                <ul>
                    <li>The Setup</li>
                    <li>Locating the IFrame src</li>
                    <li>Running the Program</li>
                    <li>Cropping the images</li>
                    <li>Credits</li>
                    <li>Contact Me</li>
                </ul>

                <h2>The Setup</h2>
                <p>This is a Screenshoter I made in ruby because I needed the books to be available offline,
                    this uses watir, the screenshoting extension available from watir, ruby, and chrome web-drivers.
                    To install ruby enter terminal and type in</p>

                <code>{`
                brew install ruby
                `}</code>
                <br/>
                <br/>
                <p>
                    This uses homebrew to install ruby, then you have to install the next few dependancies:
                </p>
                <code>{`gem install watir `}</code>
                <br/>
                <code>{`gem install 'watir/extensions/element/screenshot'\ `}</code>
                <br/>
                <br/>
                <p>
                    Now go to the <a href={"http://chromedriver.chromium.org/downloads"}>google chrome driver website</a>
                    and download the appropriate web driver.
                </p>

                <h2>Locating the IFrame src</h2>
                <p>Go to google chrome, and open up <a
                    href={"https://idp.activeteachonline.com/sso/idp/www/module.php/core/loginuserpass.php?AuthState=_558b21158ff8cf5f59c38e59d88357204d6012af64%3Ahttps%3A%2F%2Fidp.activeteachonline.com%2Fsso%2Fidp%2Fwww%2Fsaml2%2Fidp%2FSSOService.php%3Fspentityid%3Dhttps%253A%252F%252Fwww.pearsonactivelearn.com%26cookieTime%3D1527527354%26RelayState%3D"}
                >this</a> now login and travel to the book you want to create a PDF of.
                    Once the book opens up in the separate tab, right click on the book and inspect element. And then
                    inspect element again until you see the &lt;iframe> tag. once you see that it should say</p>
                <code>{`src = 'some long website'`}</code>
                <br/>
                <br/>

                <p>copy the <code>{`'some long website'`}</code> and open up the <code>{`PDF maker.rb `}</code> program. now fill out the details where it tells you too</p>

                <pre>
                    <code>{`
            # Enter your email
username = "USERNAME"   #<------- Username Goes Here 
# Enter your Password
password = "PASSWORD"   #<------ Password Goes Here

# Enter the src of the IFrame
iframesrc = "https://resources.pearsonactivelearn.com/r00/r0036/r003663/r00366335/current/index.html?domain=pearsonactivelearn.com"
                    `}</code>
                </pre>

                <h2>Running the Program</h2>
                <p>To make sure everything runs smoothly tick the following criteria</p>
                <ul>
                    <li>The program is in an empty folder that doesnt have any previously ran <code>{`.png`}</code> files</li>
                    <li>The <code>{`Browser.div(:class => ['panel-body', 'student-book-panel']).as[1].click`}</code> on line 36 has the
                        right number in the .as[x] bit, if its the first book in your portal then change it to 0 since its zero indexed.</li>
                    <li>Once the program has reached the end of the pages just terminate it, it shouldnt be able to screenshot anymore pages
                        because it should automatically remove the button but just incase be sure to turn it off</li>
                    <li>if you have a slow internet connection then you should change the following
                        <p>Change the sleep parameter to a larger value:</p>
                        <pre>
                    <code>{`
sleep(4)  #<------ line 51
                    `}</code>
                </pre>

                        <p>And again on this line:</p>
                        <pre>
                    <code>{`
while pageNumber != 300
    Browser.screenshot.save("#{pageNumber}.png")
    Browser.iframe(:src => "#{iframesrc}" ).div(:class => ['minimal-edge', 'rightEdge']).click
    puts "ScreenShot page: #{pageNumber}"
    puts "travelling to the next page to next page"
    sleep(12)             #<----------- line 58
    pageNumber += 1
end
                    `}</code>
                </pre>

                    </li>
                    <li>change the sleep to a larger number, this means the program will take longer to run but it
                        will make sure that the webpage is loaded before taking the screenshot.</li>
                    <li>when the program is running try not to press on the screen because it might end up resulting in
                        the page number not changing in the beginning.</li>
                </ul>

                <h2>Cropping the images</h2>
                <p>To simplify the cropping process go to <a href={"https://birme.net/?target_width=1183&target_height=902&focal_y=0&auto_focal=false&rename=Page-xxx&border_color=%2342f471"}>BIRME</a> and crop them. To ensure this, first crop them horizontally, and then crop them vertically. </p>

                <h2>Reversing the Page Numbers</h2>
                <p>No worries (if you're on mac) just open automator (a pre installed app) and open the workflow
                    created. If you want to rebuild it you can using <a href={"https://apple.stackexchange.com/questions/41967/can-i-efficiently-make-a-pdf-out-of-10-jpeg-images"}>this</a>.
                </p>

                <h2>Credits</h2>
                <ul>
                    <li><a href={"https://github.com/watir"}>Watir</a></li>
                    <li><a href={"https://github.com/ansoni"}>Ansoni</a> (creator of watir screenshot element)</li>
                </ul>
                <h2>Contact Me</h2>
                <ul>
                    <li><a href="https://www.linkedin.com/in/elijah-ahmad-658a2b199/">Linkden - Elijah Ahmad</a></li>

                    <li><a href="https://www.facebook.com/elijah.ahmad.71">FaceBook - Elijah Ahmad</a></li>

                    <li><a href="https://www.instagram.com/ElijahAhmad__">Instagram - @ElijahAhmad__</a></li>

                    <li><a href="https://www.snapchat.com/add/elijah.ahmad">Snapchat - @Elijah.Ahmad</a></li>
                </ul>
            </div>
        );
    }


}

export default PearsonPDFMaker;