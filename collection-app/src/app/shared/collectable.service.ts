import {Collectable} from './collectable.model'

export class CollectableService{

    private collectables: Collectable[]=[
        {description:'Godlyn Paul',type:'single'},
        {description:'Thomas J P',type:'complicated'},
        {description:'Balraj Singh Bhullar',type:'married'},
        {description:'Sivam Gupta',type:'complicated'}
    ];
    getCollectables(){
        return this.collectables;
    }

    private collection: Collectable[]=[];
    getCollection(){
        return this.collection;
    }

    addToCollection(item : Collectable){
        if(this.collection.indexOf(item) !== -1){
            return;
        }else{
            this.collection.push(item);
        }

    }
    removeFromCollection(item :Collectable){
        this.collection.splice(this.collection.indexOf(item),1);  
    }
}
