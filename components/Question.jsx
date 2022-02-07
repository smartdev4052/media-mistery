import { connect } from 'react-redux';
import Accordion from './features/accordion/accordion';
import Card from './features/accordion/card';

const Question = (props) => {
    const {title, questions, foot} = props.faqlist[props.position];
    return(
        <div className="page-content">
        <div className="container">

    <h2 className="title mb-3 text-center">Frequently Asked Questions</h2>

            <div className="row">
                <div className="col-12">
                    <Accordion adClass="accordion-plus">
                        {
                            questions.map(question => <Card title={question.title} adClass="card-box card-sm bg-light">
                                {question.content}
                            </Card>)
                        }
                    </Accordion>
                </div>
            </div>
    <p className="mb-3 text-center">{foot}</p>
        </div>
    </div>
    );
}

const mapStateToProps = (state) =>  ({
    faqlist : state.faqlist
});

export default connect(mapStateToProps, null)(Question);