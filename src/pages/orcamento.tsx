import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Box,
  TextareaAutosize,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

import { Landpage } from "components/Layout/landpage";
import { Title } from "components/Title";

import { useForm, SubmitHandler } from "react-hook-form";

import { ValidatedEmail } from "utils/validation";
import { useState } from "react";
import { maskPhone } from "utils/masked";

import styles from "../styles/pages/budget.module.scss";
import commonStyles from "../styles/commonStyles.module.scss";

interface IFormInput {
  website: string;
  application: string;
  "e-commerce": string;
  visualIdentify: string;
  marketingDigital: string;
  socialMedia: string;

  amount2k: string;
  amount5k: string;
  amount10k: string;

  name: string;
  "e-mail": string;
  phone: string;
  company: string;
  didMeet: string;
  message: string;
}

export default function Budget() {
  const [phone1, setPhone1] = useState("");
  const [didMeet, setDidMeet] = useState("");

  // SELECT
  const handleChange = (event: SelectChangeEvent) => {
    setDidMeet(event.target.value as string);
  };

  function clearInput() {
    setPhone1("");
    setDidMeet("");
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data, didMeet);
  };

  return (
    <Landpage>
      <div className={styles.container_budget}>
        <aside>
          <h1>Deixe seu projeto em boas mãos!</h1>
          <p>
            Preencha corretamente as informações do formulário para que um de
            nossos especialistas entre em contato
          </p>
        </aside>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Title title="Como podemos ajudá-lo?" icon="ri-question-line ri-2x" />
          <FormGroup className={styles.form_group_checkbox}>
            <FormControlLabel
              {...register("website")}
              control={
                <Checkbox
                  defaultChecked
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 32 } }}
                />
              }
              label="Website"
            />
            <FormControlLabel
              {...register("application")}
              control={
                <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 32 } }} />
              }
              label="Aplicativo"
            />

            <FormControlLabel
              {...register("e-commerce")}
              control={
                <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 32 } }} />
              }
              label="E-commerce"
            />

            <FormControlLabel
              {...register("visualIdentify")}
              control={
                <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 32 } }} />
              }
              label="Identidade Visual"
            />

            <FormControlLabel
              {...register("marketingDigital")}
              control={
                <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 32 } }} />
              }
              label="Marketing Digital"
            />

            <FormControlLabel
              {...register("socialMedia")}
              control={
                <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 32 } }} />
              }
              label="Gestão de mídias sociais"
            />
          </FormGroup>

          <Title
            title="Qual seu orçamento disponível?"
            icon="ri-money-dollar-circle-line ri-2x"
          />
          <FormControl
            className={styles.form_control_radio}
            component="fieldset"
          >
            <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
              <FormControlLabel
                {...register("amount2k")}
                value="amount_2k"
                control={
                  <Radio
                    sx={{
                      "& .MuiSvgIcon-root": {
                        fontSize: 32,
                      },
                    }}
                  />
                }
                label="Abaixo de 2k"
              />
              <FormControlLabel
                {...register("amount5k")}
                value="amount_5k"
                control={
                  <Radio
                    sx={{
                      "& .MuiSvgIcon-root": {
                        fontSize: 32,
                      },
                    }}
                  />
                }
                label="5k ~ 10k"
              />
              <FormControlLabel
                {...register("amount10k")}
                value="amount_10k"
                control={
                  <Radio
                    sx={{
                      "& .MuiSvgIcon-root": {
                        fontSize: 32,
                      },
                    }}
                  />
                }
                label="Acima de 10k"
              />
            </RadioGroup>
          </FormControl>

          <Title
            title="Informações do projeto?"
            icon="ri-information-line ri-2x"
          />

          <Box className={styles.info_project}>
            <TextField
              {...register("name", { required: true })}
              id="outlined-required"
              label="Nome completo"
              variant="outlined"
            />
            <p>{errors.name && "Por favor, informe seu NOME!"}</p>

            <TextField
              {...register("e-mail", {
                required: true,
                pattern: ValidatedEmail,
              })}
              id="outlined-required"
              label="E-mail"
              variant="outlined"
            />
            <p>{errors["e-mail"] && "Por favor, informe seu E-MAIL!"}</p>
            <p>
              {errors["e-mail"] && errors["e-mail"].type === "pattern"
                ? "Por favor digite seu E-MAIL corretamente!"
                : ""}
            </p>

            <TextField
              {...register("phone", { required: true })}
              id="outlined-required"
              type="tel"
              label="Telefone"
              variant="outlined"
              value={phone1}
              onChange={(e) => setPhone1(maskPhone(e.target.value))}
            />
            <p>
              {errors.phone && "Por favor, informe seu número de TELEFONE!"}
            </p>

            <TextField
              {...register("company", { required: true })}
              id="outlined-required"
              label="Empresa"
              variant="outlined"
            />
            <p>
              {errors.company && "Por favor, informe o número de sua EMPRESA!"}
            </p>

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Como nos conheceu?
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={didMeet}
                label="Como nos conheceu?"
                onChange={handleChange}
              >
                <MenuItem value="facebook">Facebook</MenuItem>
                <MenuItem value="instagram">Instagram</MenuItem>
                <MenuItem value="linkedIn">LinkedIn</MenuItem>
              </Select>
            </FormControl>

            <TextareaAutosize
              {...register("message", { required: true })}
              aria-label="minimum height"
              minRows={10}
              maxRows={15}
              maxLength={900}
              placeholder="Detalhes do projeto"
              style={{
                width: "100%",
                padding: ".8rem",
                border: "1px solid var(--gray)",
              }}
            />
            <p>{errors.message && "Por favor, digite sua MENSAGEM!"}</p>
          </Box>

          <div className={commonStyles.flex}>
            <button className={commonStyles.btn_default} type="submit">
              Enviar
            </button>
            <button
              className={commonStyles.btn_secondary}
              type="reset"
              onClick={clearInput}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </Landpage>
  );
}
