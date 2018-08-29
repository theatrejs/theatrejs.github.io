import {Animation} from 'components/common/animation.js';
import {Image} from 'components/common/image.js';

import {Direction} from 'components/demo/direction.js';
import {Run} from 'components/demo/run.js';
import {Spritesheet} from 'components/demo/spritesheet.js';

function input(entity) {

    this.inputs.forEach((input) => {

        const directionComponent = entity.get('direction');
        const imageComponent = entity.get('image');
        const inputComponent = entity.get('input');
        const spritesheetComponent = entity.get('spritesheet');

        if (inputComponent.inputs.indexOf(input.action) !== -1
        && input.state === 'DOWN') {

            switch (input.action) {

                case 'KEY_UP':

                    entity.add([

                        new Run(),
                        new Direction('UP'),
                        new Animation(spritesheetComponent.animations['RUN_UP'])
                    ]);

                break;

                case 'KEY_RIGHT':

                    entity.add([

                        new Run(),
                        new Direction('RIGHT'),
                        new Animation(spritesheetComponent.animations['RUN_RIGHT'])
                    ]);

                break;

                case 'KEY_DOWN':

                    entity.add([

                        new Run(),
                        new Direction('DOWN'),
                        new Animation(spritesheetComponent.animations['RUN_DOWN'])
                    ]);

                break;

                case 'KEY_LEFT':

                    entity.add([

                        new Run(),
                        new Direction('LEFT'),
                        new Animation(spritesheetComponent.animations['RUN_LEFT'])
                    ]);

                break;
            }
        }

        else if (entity.has(['run']) === true
        && inputComponent.inputs.indexOf(input.action) !== -1
        && input.state === 'UP') {

            switch (input.action) {

                case 'KEY_UP':

                    if (directionComponent.direction === 'UP') {

                        entity.remove(['animation', 'run']);
                        imageComponent.frame = spritesheetComponent.animations['IDLE_UP'];
                    }

                break;

                case 'KEY_RIGHT':

                    if (directionComponent.direction === 'RIGHT') {

                        entity.remove(['animation', 'run']);
                        imageComponent.frame = spritesheetComponent.animations['IDLE_RIGHT'];
                    }

                break;

                case 'KEY_DOWN':

                    if (directionComponent.direction === 'DOWN') {

                        entity.remove(['animation', 'run']);
                        imageComponent.frame = spritesheetComponent.animations['IDLE_DOWN'];
                    }

                break;

                case 'KEY_LEFT':

                    if (directionComponent.direction === 'LEFT') {

                        entity.remove(['animation', 'run']);
                        imageComponent.frame = spritesheetComponent.animations['IDLE_LEFT'];
                    }

                break;
            }
        }
    });
}

export {input};
