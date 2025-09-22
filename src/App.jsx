import './App.css';
import Event from './components/Event';

const App = () => {
  return (
    <div className="App">
      <h1>UMD Tech Career Fairs Board</h1>
      <h2>Discover amazing tech events at UMD!</h2>

      <div className="events-container">
        <Event
          title="Fall 2025 Computer Science Career & Internship Fair"
          description="Connect with top tech companies and kickstart your career!"
          time="Sep 22 11:00 AM - 4:00 PM"
          location={
            <>
              Register via Handshake{' '}
              <a
                href="https://app.joinhandshake.com/stu/career_fairs/58525"
                target="_blank"
              >
                here!
              </a>
            </>
          }
        />
        <Event
          title="UMD Fall Career & Internship Fair | Fall 2025"
          description="Connect with top tech companies and kickstart your career!"
          time="Sep 25, 26, 30 11:00 AM - 4:00 PM"
          location={
            <>
              Register via Handshake{' '}
              <a
                href="https://app.joinhandshake.com/stu/career_fairs/56989"
                target="_blank"
              >
                here!
              </a>
            </>
          }
        />
        <Event
          title="Quantum Leap Career Nexus 2025"
          description="For careers in quantum science, engineering, and information."
          time="Oct 29 9:00 AM - 4:00 PM"
          location={
            <>
              Register via Handshake{' '}
              <a
                href="https://app.joinhandshake.com/stu/career_fairs/56777"
                target="_blank"
              >
                here!
              </a>
            </>
          }
        />
        <Event
          title="September Info Sessions - Disney Tech Internships:"
          description="Discover how you can be part of the magic at Disney!"
          time="Tue Sep 9 4:00 PM"
          location={
            <>
              Register via Handshake{' '}
              <a
                href="https://app.joinhandshake.com/stu/events/1810880"
                target="_blank"
              >
                here!
              </a>
            </>
          }
        />

        <Event
          title="Quantum Leap Career Nexus 2025"
          description="For careers in quantum science, engineering, and information."
          time="Oct 29 9:00 AM - 4:00 PM"
          location={
            <>
              Register via Handshake{' '}
              <a
                href="https://app.joinhandshake.com/stu/career_fairs/56777"
                target="_blank"
              >
                here!
              </a>
            </>
          }
        />

        <Event
          title="Communication & Media Career & Internship Fair | Fall 2025"
          description="The University of Maryland's Annual Communication & Media Career and Internship Fair"
          time="Oct 28 12:00 PM - 4:00 PM"
          location={
            <>
              Register via Handshake{' '}
              <a
                href="https://app.joinhandshake.com/stu/career_fairs/59348"
                target="_blank"
              >
                here!
              </a>
            </>
          }
        />

        <Event
          title="UMD Electrical & Computer Engineering Career Fair"
          description="For careers in electrical and computer engineering."
          time="Oct 17 12:00 PM - 4:00 PM"
          location={
            <>
              Register via Handshake{' '}
              <a
                href="https://app.joinhandshake.com/stu/career_fairs/59442"
                target="_blank"
              >
                here!
              </a>
            </>
          }
        />

        <Event
          title="Creative Tech Recruiter Meetup || Fall 2025"
          description="This unique event will include mini-information sessions from employers."
          time="Oct 23 1:00 PM - 3:00 PM"
          location={
            <>
              Register via Handshake{' '}
              <a
                href="https://app.joinhandshake.com/stu/career_fairs/60773"
                target="_blank"
              >
                here!
              </a>
            </>
          }
        />

        <Event
          title="UMD Aerospace & Mechanical Engineering Career Fair"
          description="For careers in aerospace and mechanical engineering."
          time="Oct 31 12:00 PM - 4:00 PM"
          location={
            <>
              Register via Handshake{' '}
              <a
                href="https://app.joinhandshake.com/stu/career_fairs/59436"
                target="_blank"
              >
                here!
              </a>
            </>
          }
        />

        <Event
          title="CS Corporate Partner Event: Google's Building Your Technical Career"
          description="Join us for mock questions and tips to ace that interview!"
          time="Sep 22 5:30 PM - 7:00 PM"
          location={
            <>
              Register via Handshake{' '}
              <a
                href="https://app.joinhandshake.com/stu/events/1824414"
                target="_blank"
              >
                here!
              </a>
            </>
          }
        />
      </div>
    </div>
  );
};

export default App;
