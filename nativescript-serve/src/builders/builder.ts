import { BuilderContext, BuilderOutput, createBuilder } from '@angular-devkit/architect/src/index2';
import { exec } from 'child_process';
import { join } from 'path';

interface NSServeOptions {
  ios?: boolean;
  android?: boolean;
  web?: boolean;
}

// Make sure you point out to the right path
const resolveTns = (cwd: string, flag: string) => {
  const path = join(cwd, 'node_modules', '.bin', 'tns');
  return `${path} ${flag}`;
};

export default createBuilder<any>(
  async (options: NSServeOptions, context: BuilderContext): Promise<BuilderOutput> => {
    if (options.web) {
      return context.scheduleBuilder('@angular-devkit/build-angular:serve')
        .then(() => ({ success: true })).catch(() => ({ success: false}));
    }
    let flag = '';
    if (options.ios) {
      flag = '--ios';
    } else if (options.android) {
      flag = '--android';
    }
    if (!flag) {
      throw new Error('Specify platform');
    }
    return new Promise((resolve, reject) => {
      exec(resolveTns(process.cwd(), flag), err => {
        if (err) {
          reject({
            error: err,
            success: false
          })
        } else {
          resolve({
            success: true
          })
        }
      })
    });
  }
);
