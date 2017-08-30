/**
 * Created by kal on 8/1/17.
 */


import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import 'rxjs/add/operator/distinctUntilChanged';


@Injectable()
export class AtomsService {
    private atoms: any = {'result': {'atoms': [{'outgoing': [2, 3], 'handle': 1, 'name': '', 'truthvalue': {'type': 'simple', 'details': {'count': 0.0, 'confidence': 0.0, 'strength': 1.0}}, 'attentionvalue': {'lti': 0, 'sti': 0, 'vlti': false}, 'incoming': [], 'type': 'EquivalenceLink'}, {'outgoing': [], 'handle': 2, 'name': 'LOC285484', 'truthvalue': {'type': 'simple', 'details': {'count': 0.0, 'confidence': 0.0, 'strength': 1.0}}, 'attentionvalue': {'lti': 0, 'sti': 0, 'vlti': false}, 'incoming': [1], 'type': 'PredicateNode'}, {'outgoing': [4, 5], 'handle': 3, 'name': '', 'truthvalue': {'type': 'simple', 'details': {'count': 0.0, 'confidence': 0.0, 'strength': 1.0}}, 'attentionvalue': {'lti': 0, 'sti': 0, 'vlti': false}, 'incoming': [1], 'type': 'LambdaLink'}, {'outgoing': [], 'handle': 4, 'name': '$X', 'truthvalue': {'type': 'simple', 'details': {'count': 0.0, 'confidence': 0.0, 'strength': 1.0}}, 'attentionvalue': {'lti': 0, 'sti': 0, 'vlti': false}, 'incoming': [3, 7], 'type': 'VariableNode'}, {'outgoing': [6, 7], 'handle': 5, 'name': '', 'truthvalue': {'type': 'simple', 'details': {'count': 0.0, 'confidence': 0.0, 'strength': 1.0}}, 'attentionvalue': {'lti': 0, 'sti': 0, 'vlti': false}, 'incoming': [3], 'type': 'EvaluationLink'}, {'outgoing': [], 'handle': 6, 'name': 'overexpressed', 'truthvalue': {'type': 'simple', 'details': {'count': 0.0, 'confidence': 0.0, 'strength': 1.0}}, 'attentionvalue': {'lti': 0, 'sti': 0, 'vlti': false}, 'incoming': [5], 'type': 'PredicateNode'}, {'outgoing': [8, 4], 'handle': 7, 'name': '', 'truthvalue': {'type': 'simple', 'details': {'count': 0.0, 'confidence': 0.0, 'strength': 1.0}}, 'attentionvalue': {'lti': 0, 'sti': 0, 'vlti': false}, 'incoming': [5], 'type': 'ListLink'}, {'outgoing': [], 'handle': 8, 'name': 'LOC285483', 'truthvalue': {'type': 'simple', 'details': {'count': 0.0, 'confidence': 0.0, 'strength': 1.0}}, 'attentionvalue': {'lti': 0, 'sti': 0, 'vlti': false}, 'incoming': [7], 'type': 'GeneNode'}, {'outgoing': [10, 11], 'handle': 9, 'name': '', 'truthvalue': {'type': 'simple', 'details': {'count': 0.0, 'confidence': 0.0, 'strength': 1.0}}, 'attentionvalue': {'lti': 0, 'sti': 0, 'vlti': false}, 'incoming': [], 'type': 'AndLink'}, {'outgoing': [], 'handle': 10, 'name': 'CCR6', 'truthvalue': {'type': 'simple', 'details': {'count': 0.0, 'confidence': 0.0, 'strength': 1.0}}, 'attentionvalue': {'lti': 0, 'sti': 0, 'vlti': false}, 'incoming': [9, 12], 'type': 'GeneNode'}, {'outgoing': [], 'handle': 11, 'name': 'GO:0009986', 'truthvalue': {'type': 'simple', 'details': {'count': 0.0, 'confidence': 0.0, 'strength': 1.0}}, 'attentionvalue': {'lti': 0, 'sti': 0, 'vlti': false}, 'incoming': [9], 'type': 'ConceptNode'}, {'outgoing': [10, 13], 'handle': 12, 'name': '', 'truthvalue': {'type': 'simple', 'details': {'count': 0.0, 'confidence': 0.0, 'strength': 1.0}}, 'attentionvalue': {'lti': 0, 'sti': 0, 'vlti': false}, 'incoming': [], 'type': 'MemberLink'}, {'outgoing': [], 'handle': 13, 'name': 'GO:0010634', 'truthvalue': {'type': 'simple', 'details': {'count': 0.0, 'confidence': 0.0, 'strength': 1.0}}, 'attentionvalue': {'lti': 0, 'sti': 0, 'vlti': false}, 'incoming': [12], 'type': 'ConceptNode'}]}};

    private defaultState = this.atoms;

    private editItemSource:BehaviorSubject<any> = new BehaviorSubject(this.defaultState);

    public editItem = this.editItemSource.asObservable().distinctUntilChanged();

    changeItem(state) {
        this.editItemSource.next(state);
        console.log("Item Changed", state);
    }

}
