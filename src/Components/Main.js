import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./styles/Main.css";

const Main =()=>{
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);

    // Replace with your OpenWeatherMap API key
    const API_KEY = 'f942bce5e27e3ddaa943f96111f674ea';
    const CITY = 'Bengaluru';
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`;

    useEffect(() => {
        axios.get(API_URL)
            .then(response => {
            setWeatherData(response.data);
        })
        .catch(error => {
            setError("Unable to fetch weather data");
        });
     }, [API_URL]);

  if (error) {
    return <div className="weather-widget">Error: {error}</div>;
  }

  if (!weatherData) {
    return <div className="weather-widget">Loading...</div>;
  }
    return(
        
        <div className='Main'>
            <div className="body">
                <div className="body-page">
                    <header class="header">
                        <div class="header__box">
                                <div className="weather-widget">
                                    <h2>Weather in {weatherData.name}</h2>
                                    <p>Temperature: {weatherData.main.temp}°C</p>
                                    <p>Condition: {weatherData.weather[0].description}</p>
                                    <p>Humidity: {weatherData.main.humidity}%</p>
                                    {/* <p>Wind Speed: {weatherData.wind.speed} m/s</p> */}
                                    <div>
                                    <h1 class="Pro">
                                        <b>ProMark</b>
                                    </h1>
                                    </div>
                                </div>
      <nav class="header__nav">
        <ul class="header__nav-list">
          <li class="header__nav-item">
            <a href="/tools/"
               class="header__nav-link "
            >Tools</a>
          </li>
          <li class="header__nav-item">
            <a href="/pricing/" class="
              header__nav-link
              
            ">Pricing</a>
          </li>
          <li class="header__nav-item">
            <a href="mailto:raoadithya01@gmail.com" class="header__nav-link">Support</a>
          </li>
          <li class="header__nav-item">
            <a href="/" class="header__nav-link highlight">Login</a>
          </li>
        </ul>
      </nav>

      </div>
</header>
                    <section class="hero">
                        <div class="hero__box">
                            <div class="hero__box-main">
                                <div class="hero__logo">
                                <h1 class="header__logo">ProMark</h1>
                                <h2 class="hero__title">Create a unique, professional logo for your business</h2>
                                <div class="hero__note">Kickstart your brand with business card designs, social media graphics, app icons, letter heads and more      </div>
                                <div class="hero__action">
				                    <button class="btn">Create my logo</button>
			                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
{/* Build Section */}
                        <div class="build">
                            <div class="build__box">
                                <div class="build__box-row">
                                    <div class="build__cover">
                                        <img src="i1@2x.jpg" srcset="i1@2x.jpg 2x" class="build__cover-img" alt="img"/>
                                        <div class="build__cover-decor"></div>
                                        <div class="build__cover-decor2"></div>
                                    </div>    
                                    <div class="build__main">
                                        <div class="build__main-title">Build a beautiful brand on time and on budget</div>
                                        <div class="build__main-note">Kickstart your business with thousands of <b>ready-to-use</b> design assets.</div>
                                        <div class="build__main-list">
                                            <div class="build__main-list-item">
                                                <div class="build__main-list-item-note">1. Logo design files</div>
                                            </div>
                                            <div class="build__main-list-item">
                                                <div class="build__main-list-item-ico">
                                                    <div class="build__main-list-item-note">2. Social profile icons</div>
                                                </div>
                                            </div>
                                            <div class="build__main-list-item">
                                                <div class="build__main-list-item-ico">
                                                    <div class="build__main-list-item-note">3. Business card designs</div>
                                                </div>
                                            </div>
                                            <div class="build__main-list-item">
                                                <div class="build__main-list-item-ico">
                                                    <div class="build__main-list-item-note">4. Animated designs</div>
                                                </div>
                                            </div>
                                            <div class="build__main-list-item">
                                                <div class="build__main-list-item-ico">
                                                    <div class="build__main-list-item-note">5. Letterhead templates</div>
                                                </div>
                                            </div>
                                            <div class="build__main-list-item">
                                                <div class="build__main-list-item-ico">
                                                    <div class="build__main-list-item-note">6. Social media designs</div>
                                                </div>
                                            </div>
                                            <div class="build__main-list-item">
                                                <div class="build__main-list-item-ico">
                                                    <div class="build__main-list-item-note">7. Presentation templates</div>
                                                </div>
                                            </div>
                                            <div class="build__main-list-item">
                                                <div class="build__main-list-item-ico">
                                                    <div class="build__main-list-item-note">8. Brand guide</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
{/* Chat section */}
                        <div class="chat">
                            <div class="chat__box">
                                <div class="chat__box-line">
                                    <div class="chat__main">
                                        <div class="chat__main-title">The only logo maker with free customization</div>
                                        <div class="chat__main-note">We’ll personally help you customize your logo with the purchase of any package.</div>
                                    </div>
                                    <div class="chat__phone">
                                        <div class="chat__list">
                                            <div class="chat__list-item chat__list-item--s1">
                                                <img src="userpic4@2x.png" srcset="userpic4@2x.png 2x" alt="customer" class="chat__list-item-userpic"/>
                                                <div class="chat__list-item-note">Can you put the icon on a hexagonal container, change the text to green, and also remove the tagline</div>
                                            </div>
                                            <div class="chat__list-item chat__list-item--s2">
                                                <img src="userpic5@2x.png" srcset="userpic5@2x.png 2x" alt="Jack" class="chat__list-item-userpic"/>
                                                <div class="chat__list-item-note">
                                                    <div class="chat__list-item-extra">
                                                        <img src="la@2x.png" srcset="la@2x.png 2x" alt="Monkspace" class="chat__list-item-extra-img"/>
                                                        <div class="chat__list-item-txt">Sure thing, how does this look?</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
{/* Instantly Section */}

                        <div class="instantly">
                            <div class="instantly__box">
                                <div class="instantly__main">
                                    <div class="instantly__title">Instantly customize and export</div>
                                    <div class="instantly__note">Right in your browser, no designer or software needed</div>
                                </div>
                                <div class="instantly__preview">
                                    <div class="instantly__preview-box">
                                        <img src="settings.gif"  alt="img" class="instantly__preview-img"/>
                                    </div>
                                    <div class="instantly__preview-note">
                                        <div class="instantly__preview-info instantly__preview-info--s1">
                                            <div class="instantly__preview-title">Export to all major formats</div>
                                            <div class="instantly__preview-text">Including SVG, EPS, PNG and PDF</div>
                                        </div>
                                        <div class="instantly__preview-info instantly__preview-info--s2">
                                            <div class="instantly__preview-title">Adjust text and image size</div>
                                            <div class="instantly__preview-text">Perfecly sized for web and print</div>
                                        </div>
                                        <div class="instantly__preview-info instantly__preview-info--s3">
                                            <div class="instantly__preview-title">Easily edit and customize</div>
                                            <div class="instantly__preview-text">Double click to edit text</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
{/* Feature section */}
                        <div class="features">
                            <div class="features__box">
                                <div class="features__list">
                                    <div class="features__item features__item--s1">
                                        <div class="features__item-cover">
                                            <h1>N</h1>
                                        </div>
                                        <div class="features__item-box">
                                            <div class="features__item-title">No more designer anxiety</div>
                                            <div class="features__item-note">Get your logo instantly, not in weeks.</div>
                                        </div>
                                    </div>
                                    <div class="features__item features__item--s2">
                                        <div class="features__item-cover">
                                            <h1>N</h1>
                                        </div>
                                        <div class="features__item-box">
                                            <div class="features__item-title">Need a tweak to your design?</div>
                                            <div class="features__item-note">We’ll do it for you, absolutely free</div>
                                        </div>
                                    </div>
                                    <div class="features__item features__item--s3">
                                        <div class="features__item-cover">
                                            <h1>N</h1>
                                        </div>
                                        <div class="features__item-box">
                                            <div class="features__item-title">No monthly charges</div>
                                            <div class="features__item-note">Pay once, get access to our branding tools forever.</div>
                                        </div>
                                    </div>
                                    <div class="features__item features__item--s4">
                                        <div class="features__item-cover">
                                            <h1>F</h1>
                                        </div>
                                        <div class="features__item-box">
                                            <div class="features__item-title">Full copyright included</div>
                                            <div class="features__item-note">For use in commercial and personal projects</div>
                                        </div>
                                    </div>
                                    <div class="features__item features__item--s5">
                                        <div class="features__item-cover">
                                            <h1>U</h1>
                                        </div>
                                        <div class="features__item-box">
                                            <div class="features__item-title">Unlimited revisions</div>
                                            <div class="features__item-note">Modify your logo at any time, even after purchase</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="features__action">
                                    <div class="features__action-title">Create your unique logo design</div>
                                    <div class="features__action-note">generate unlimited logos for free</div>
                                        <button className='btn'>Create my logo</button>
                                </div>
                            </div>
                        </div>
{/* Footer */}
                        <footer class="footer">
                            <div class="footer__box">
                                <div class="footer__row">
                                    <div class="footer__section">
                                        <a href="http://localhost:3000/" target="_blank" class="footer__section-title footer__section-title--style1">Create your logo</a>
                                        <div class="footer__section-note">Try Brandmark for free, no account needed</div>
                                    </div>
                                    <div class="footer__section">
                                        <a href="mailto:raoadithya01@gmail.com"  class="footer__section-title footer__section-title--style3">Support</a>
                                        <div class="footer__section-note">Have questions or need help? Start here.</div>
                                    </div>
                                    <div class="footer__section">
                                        <a href="/tools/" class="footer__section-title footer__section-title--style2">Tools</a>
                                        <div class="footer__section-note">Check out our free tools for color, font and logo design</div>
                                    </div>
                                    <div class="footer__section" id="footer__section__2">
                                        <a href="/terms.html" target="_blank" class="footer__section-title">Terms of service</a>
                                    </div>
                                    <div class="footer__section" id="footer__section__3">
                                        <a href="/privacy.html" target="_blank" class="footer__section-title">Privacy policy</a>
                                    </div>
                                </div>
                                <div class="footer__decor">
                                    <div class="footer__decor-item footer__decor-item--s1"></div>
                                    <div class="footer__decor-item footer__decor-item--s2"></div>
                                </div>
                            </div>
                        </footer>
                </div>
            </div>
        </div>
    )
}

export default Main